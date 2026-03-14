import { Loader2 } from 'lucide-react';

export default function Spinner({ className = '', size = 24 }: { className?: string, size?: number }) {
  return (
    <Loader2 
      className={`animate-spin text-brand-blue ${className}`} 
      size={size} 
    />
  );
}
