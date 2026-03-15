import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware';
import { pool } from '../config/db'; 

const router = express.Router();

router.get('/info', (req, res) => {
    res.send("This is public sandbox info page.");
})

router.get('/vms', authenticateToken, async (req: any, res: any) => {
    try{
        const userID = req.user.id;

        const [vms] = await pool.execute(
            'SELECT * FROM virtual_machines WHERE user_id = ?',
            [userID]
        );

        res.status(200).json(vms);
    } catch (error) {
        console.error('Error fetching VMs: ', error);
        res.status(500).json({ error: 'Internal server error.'});
    }
});

// create a new VM (Crucial: Max 3 limit)
router.post('/vms', authenticateToken, async (req: any, res: any) => {
    try {
        const userID = req.user.id;
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'VM name is required.' });
        }

        const [rows]: any = await pool.execute(
            'SELECT COUNT(*) as vmCount FROM virtual_machines WHERE user_id = ?',
            [userID]
        );
        
        const currentVmCount = rows[0].vmCount;

        if (currentVmCount >= 3) {
            return res.status(403).json({ error: 'Limit reached. You can only have a maximum of 3 VMs.' });
        }

        // generate unique connection details for the new VM
        const containerName = `ssem_vm_${userID}_${Date.now()}`;
        const port = Math.floor(Math.random() * 1000) + 8000; 

        const [result] = await pool.execute(
            'INSERT INTO virtual_machines (user_id, name, status, port, container_name) VALUES (?, ?, ?, ?, ?)',
            [userID, name, 'stopped', port, containerName]
        );

        res.status(201).json({ 
            message: 'VM created successfully!', 
            container_name: containerName,
            port: port
        });

    } catch (error) {
        console.error('Error creating VM:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

export default router;