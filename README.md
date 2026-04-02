<p align="center">
  <img src="https://img.shields.io/badge/SSEM-Secure_Sandbox_Container-0069FF?style=for-the-badge&labelColor=0a0a23&logo=docker&logoColor=white" alt="SSEM Badge" />
</p>

<h1 align="center">
  🛡️ SSEM — Secure Sandbox Container
</h1>

<p align="center">
  <strong>Spin up isolated, browser-accessible Ubuntu desktops in seconds.</strong><br/>
  A full-stack platform for deploying secure, containerized development environments with a graphical interface — no local setup required.
</p>

<p align="center">
  <a href="#-features"><img src="https://img.shields.io/badge/Features-✨-blue?style=flat-square" /></a>
  <a href="#-quick-start"><img src="https://img.shields.io/badge/Quick_Start-🚀-green?style=flat-square" /></a>
  <a href="#-architecture"><img src="https://img.shields.io/badge/Architecture-🏗️-orange?style=flat-square" /></a>
  <a href="#-api-reference"><img src="https://img.shields.io/badge/API_Docs-📡-purple?style=flat-square" /></a>
  <a href="#-contributing"><img src="https://img.shields.io/badge/Contributing-🤝-red?style=flat-square" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Express_5-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=flat-square&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
</p>

---

## 📋 Table of Contents

- [🎯 What is SSEM?](#-what-is-ssem)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🧰 Tech Stack](#-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📡 API Reference](#-api-reference)
- [📁 Project Structure](#-project-structure)
- [🔐 Security](#-security)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 What is SSEM?

**SSEM (Secure Sandbox Environment Manager)** is a full-stack web application that lets users create, manage, and interact with **isolated Linux containers** — each running a **full Ubuntu desktop** accessible directly from the browser via **noVNC**.

Think of it as your own **cloud development lab**: sign up, click a button, and within seconds you have a complete graphical Linux desktop with VS Code, Chromium, and terminal — all sandboxed, secure, and disposable.

```
┌─────────────────────────────────────────────────────────────┐
│  🖥️  Your Browser                                          │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  SSEM Dashboard                                      │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐              │  │
│  │  │  VM #1  │  │  VM #2  │  │  VM #3  │   + Create   │  │
│  │  │ Running │  │ Stopped │  │ Running │              │  │
│  │  └────┬────┘  └─────────┘  └────┬────┘              │  │
│  └───────┼─────────────────────────┼────────────────────┘  │
│          │          noVNC          │                        │
│  ┌───────▼─────────────────────────▼────────────────────┐  │
│  │  🐧 Full Ubuntu Desktop in Browser                   │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐           │  │
│  │  │ Terminal │  │ VS Code  │  │ Chromium │           │  │
│  │  └──────────┘  └──────────┘  └──────────┘           │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🐳 Container Management
- Create up to **3 isolated containers** per user
- **Start / Stop / Delete** with a single click
- Real-time status tracking (running / stopped)
- Unique port allocation to avoid conflicts

</td>
<td width="50%">

### 🖥️ Browser-Based Desktop
- Full **Ubuntu XFCE desktop** via noVNC
- Pre-installed **VS Code, Chromium, Git**
- Interactive graphical shell — no SSH needed
- Responsive and works on any modern browser

</td>
</tr>
<tr>
<td width="50%">

### 🔐 Enterprise-Grade Security
- **JWT-based authentication** with token expiry
- **Bcrypt password hashing** (10 salt rounds)
- Containers run as **non-root** (UID 1000)
- Process isolation via Linux Namespaces & Cgroups

</td>
<td width="50%">

### 🤖 AI-Powered Assistant
- Built-in **Gemini AI chatbot** for in-app help
- Context-aware — knows SSEM architecture & features
- Supports both **Gemini API** and **local Ollama** models
- Markdown-formatted responses with rate limiting

</td>
</tr>
<tr>
<td width="50%">

### 🎨 Premium UI/UX
- Stunning **glassmorphism** design with dark mode
- Scroll-reveal animations & micro-interactions
- Fully responsive across all device sizes
- **Sonner** toast notifications for user feedback

</td>
<td width="50%">

### ⚡ Performance
- Container boot time under **10 seconds**
- Efficient Docker Compose orchestration
- MySQL connection pooling (10 connections)
- Optimized Vite build pipeline

</td>
</tr>
</table>

---

## 🏗️ Architecture

```
                        ┌──────────────────────────┐
                        │       CLIENT (Browser)    │
                        │  React 19 + TypeScript    │
                        │  Tailwind CSS + Vite      │
                        └────────────┬─────────────┘
                                     │  HTTP / REST
                                     ▼
                        ┌──────────────────────────┐
                        │     BACKEND (API Server)  │
                        │   Express 5 + TypeScript  │
                        │                          │
                        │  ┌────────┐ ┌──────────┐ │
                        │  │  Auth  │ │ VM CRUD  │ │
                        │  │ Routes │ │  Routes  │ │
                        │  └───┬────┘ └────┬─────┘ │
                        │      │           │       │
                        │  ┌───▼───────────▼─────┐ │
                        │  │   Middleware (JWT)   │ │
                        │  └─────────────────────┘ │
                        └──────┬──────────┬────────┘
                               │          │
                    ┌──────────▼──┐  ┌────▼──────────────┐
                    │   MySQL DB  │  │   Docker Engine    │
                    │  (ssem_db)  │  │                    │
                    │             │  │  ┌──────────────┐  │
                    │  • users    │  │  │ Container #1 │  │
                    │  • vms      │  │  │  Ubuntu+VNC  │  │
                    │             │  │  │  Port: 6281  │  │
                    └─────────────┘  │  └──────────────┘  │
                                     │  ┌──────────────┐  │
                                     │  │ Container #2 │  │
                                     │  │  Ubuntu+VNC  │  │
                                     │  │  Port: 6282  │  │
                                     │  └──────────────┘  │
                                     └────────────────────┘
```

---

## 🧰 Tech Stack

| Layer | Technology | Purpose |
|:------|:-----------|:--------|
| **Frontend** | React 19, TypeScript, Tailwind CSS 4 | SPA with premium UI/UX |
| **Build Tool** | Vite 6 | Lightning-fast dev server & bundler |
| **Backend** | Node.js, Express 5, TypeScript | RESTful API server |
| **Database** | MySQL (mysql2) | User accounts & VM metadata |
| **Auth** | JWT + Bcrypt | Secure token-based authentication |
| **Containers** | Docker, Docker Compose | Isolated sandbox environments |
| **Desktop** | noVNC + XFCE (accetto image) | Browser-accessible graphical desktop |
| **AI Chat** | Google Gemini / Ollama (Gemma2) | Context-aware project assistant |
| **Icons** | Lucide React | Beautiful, consistent iconography |
| **Notifications** | Sonner | Toast notifications |
| **Routing** | React Router DOM 7 | Client-side navigation |
| **HTTP Client** | Axios | API communication |

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

| Tool | Version | Download |
|:-----|:--------|:---------|
| **Node.js** | ≥ 18.x | [nodejs.org](https://nodejs.org/) |
| **npm** | ≥ 9.x | Comes with Node.js |
| **Docker Desktop** | Latest | [docker.com](https://www.docker.com/products/docker-desktop/) |
| **MySQL** | ≥ 8.x | [mysql.com](https://dev.mysql.com/downloads/) |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Rahilbhoot/Secure-Sandbox-Container-PBL.git
cd Secure-Sandbox-Container-PBL
```

### 2️⃣ Set Up the Database

Open MySQL and run the schema:

```sql
CREATE DATABASE IF NOT EXISTS ssem_db;
USE ssem_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE virtual_machines (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    status ENUM('running', 'stopped') DEFAULT 'stopped',
    vnc_port INT,
    novnc_port INT,
    container_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=ssem_db

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here

# AI Chatbot (choose one or both)
GEMINI_API_KEY=your_gemini_api_key       # Optional: Google Gemini
OLLAMA_BASE_URL=http://localhost:11434    # Optional: Local Ollama
```

### 4️⃣ Install Dependencies & Start

Open **two terminals** side by side:

**Terminal 1 — Backend:**
```bash
cd backend
npm install
npm run dev
```
> 🟢 Server starts at `http://localhost:5000`

**Terminal 2 — Frontend:**
```bash
cd frontend
npm install
npm run dev
```
> 🟢 App opens at `http://localhost:5173`

### 5️⃣ Start Docker Desktop

Make sure **Docker Desktop** is running before creating containers. The app will pull the `accetto/ubuntu-vnc-xfce-g3` image automatically on first use.

---

## 📡 API Reference

All API endpoints are prefixed with `/api`. Protected routes require a `Bearer` token in the `Authorization` header.

### 🔑 Authentication

| Method | Endpoint | Description | Auth |
|:-------|:---------|:------------|:----:|
| `POST` | `/api/register` | Create a new user account | ❌ |
| `POST` | `/api/login` | Login and receive JWT token | ❌ |

<details>
<summary><b>POST /api/register</b> — Request Body</summary>

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```
**Response:** `201 Created`
```json
{ "message": "User registered successfully!" }
```
</details>

<details>
<summary><b>POST /api/login</b> — Request Body</summary>

```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```
**Response:** `200 OK`
```json
{
  "message": "Login successful!",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```
</details>

---

### 🖥️ Virtual Machines

| Method | Endpoint | Description | Auth |
|:-------|:---------|:------------|:----:|
| `GET` | `/api/vms` | List all VMs for the authenticated user | ✅ |
| `POST` | `/api/vms` | Create a new sandbox container | ✅ |
| `PUT` | `/api/vms/:id/status` | Start or stop a VM | ✅ |
| `DELETE` | `/api/vms/:id` | Delete a VM and its container | ✅ |

<details>
<summary><b>POST /api/vms</b> — Create a VM</summary>

```json
{ "name": "my-dev-server" }
```
**Response:** `201 Created`
```json
{
  "message": "VM created and started successfully!",
  "id": 1,
  "container_id": "ssem-vm-u1-n0",
  "link": "http://localhost:6281/vnc.html?autoconnect=true"
}
```
</details>

<details>
<summary><b>PUT /api/vms/:id/status</b> — Toggle VM State</summary>

```json
{ "status": "running" }
```
or
```json
{ "status": "stopped" }
```
</details>

---

### 🤖 AI Chatbot

| Method | Endpoint | Description | Auth |
|:-------|:---------|:------------|:----:|
| `POST` | `/api/chat` | Send a message to the AI assistant | ❌ |

<details>
<summary><b>POST /api/chat</b> — Request Body</summary>

```json
{ "message": "How do I create a sandbox container?" }
```
**Response:** `200 OK`
```json
{ "reply": "To create a sandbox in SSEM, navigate to your Profile..." }
```
</details>

---

## 📁 Project Structure

```
Secure-Sandbox-Container-PBL/
│
├── 📂 frontend/                    # React SPA
│   ├── 📂 src/
│   │   ├── 📂 assets/              # Images (step screenshots, hero)
│   │   ├── 📂 components/          # Reusable UI components
│   │   │   ├── ChatBot.tsx          #   AI chatbot widget
│   │   │   ├── ChatBot.css          #   Chatbot styles
│   │   │   ├── CreateVMModal.tsx    #   VM creation dialog
│   │   │   ├── Footer.tsx           #   Site footer
│   │   │   ├── Navbar.tsx           #   Navigation bar
│   │   │   ├── Spinner.tsx          #   Loading indicator
│   │   │   └── VMCard.tsx           #   VM management card
│   │   ├── 📂 hooks/               # Custom React hooks
│   │   ├── 📂 pages/               # Route pages
│   │   │   ├── Home.tsx             #   Landing page
│   │   │   ├── Features.tsx         #   Features showcase
│   │   │   ├── Security.tsx         #   Security details
│   │   │   ├── Contact.tsx          #   Contact form
│   │   │   ├── Login.tsx            #   Login page
│   │   │   ├── Register.tsx         #   Registration page
│   │   │   └── Profile.tsx          #   User dashboard + VM management
│   │   ├── App.tsx                  # Router setup
│   │   ├── App.css                  # Global app styles
│   │   ├── index.css                # Design system / base styles
│   │   └── main.tsx                 # Entry point
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
│
├── 📂 backend/                     # Express API
│   ├── 📂 src/
│   │   ├── 📂 config/
│   │   │   ├── db.ts                # MySQL connection pool
│   │   │   └── schema.sql           # Database schema
│   │   ├── 📂 middleware/
│   │   │   └── authMiddleware.ts    # JWT verification
│   │   ├── 📂 routes/
│   │   │   ├── auth.ts              # Register & Login
│   │   │   ├── vmRoutes.ts          # VM CRUD operations
│   │   │   └── chatRoutes.ts        # AI chatbot endpoint
│   │   ├── 📂 services/
│   │   │   ├── dockerService.ts     # Docker Compose orchestration
│   │   │   ├── geminiService.ts     # Google Gemini AI integration
│   │   │   └── ollamaService.ts     # Local Ollama AI integration
│   │   ├── 📂 types/
│   │   └── index.ts                 # Server entry point
│   ├── 📂 vm-compose-files/         # Auto-generated Docker Compose YMLs
│   ├── .env                         # Environment variables (gitignored)
│   └── package.json
│
├── 📂 shared/                      # Shared TypeScript types
│   └── types.ts
│
├── Dockerfile                      # Custom sandbox image definition
├── .gitignore
└── README.md                       # ← You are here!
```

---

## 🔐 Security

SSEM implements multiple layers of security to ensure isolated and safe sandbox environments:

| Layer | Implementation | Details |
|:------|:---------------|:--------|
| 🔒 **Authentication** | JWT Tokens | 1-hour expiry, signed with server secret |
| 🔑 **Password Storage** | Bcrypt | 10 salt rounds, never stored in plaintext |
| 📦 **Container Isolation** | Linux Namespaces | Process, network, and filesystem isolation |
| 🧊 **Resource Limits** | Cgroups | Prevents resource abuse across containers |
| 👤 **Non-Root Execution** | UID 1000 | Containers run as unprivileged user |
| 🌐 **Network Segmentation** | Docker Networks | Each container in its own network namespace |
| 📊 **Rate Limiting** | Per-user VM cap | Maximum 3 concurrent containers per user |
| 🛡️ **Input Validation** | Express middleware | Sanitized inputs on all endpoints |

---

## 🖼️ Pages Overview

| Page | Route | Description |
|:-----|:------|:------------|
| 🏠 **Home** | `/` | Animated landing page with hero, steps, and tech stack |
| ✨ **Features** | `/features` | Detailed platform capabilities showcase |
| 🔐 **Security** | `/security` | Security architecture and implementation details |
| 📧 **Contact** | `/contact` | Contact form for support and inquiries |
| 🔑 **Login** | `/login` | User authentication page |
| 📝 **Register** | `/register` | New user registration |
| 👤 **Profile** | `/profile` | Dashboard with VM creation, management, and noVNC access |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "feat: add amazing feature"
   ```
4. **Push** to your branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### 📝 Commit Convention

| Prefix | Usage |
|:-------|:------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | Code formatting (no logic change) |
| `refactor:` | Code restructuring |
| `test:` | Adding or updating tests |
| `chore:` | Maintenance tasks |

---

## 👥 Authors

<table>
<tr>
<td align="center">
  <strong>Rahil Bhoot</strong><br/>
  <a href="https://github.com/Rahilbhoot">@Rahilbhoot</a><br/>
  <sub>Lead Developer</sub>
</td>
</tr>
</table>

---

## 📄 License

This project is licensed under the **ISC License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <img src="https://img.shields.io/badge/Made_with-❤️-red?style=for-the-badge&labelColor=0a0a23" />
  <img src="https://img.shields.io/badge/Built_with-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0a0a23" />
  <img src="https://img.shields.io/badge/Powered_by-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white&labelColor=0a0a23" />
</p>

<p align="center">
  ⭐ <strong>If you found this project useful, give it a star!</strong> ⭐
</p>
