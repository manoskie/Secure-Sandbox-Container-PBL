import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32 min-h-screen transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark dark:text-white sm:text-4xl">Contact Support</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Need help with your containers? Reach out to our team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-2xl bg-gray-50 dark:bg-slate-800 p-10 flex flex-col items-center justify-center text-center transition-colors">
             <MessageSquare className="h-12 w-12 text-brand-blue dark:text-blue-400 mb-4" />
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Support Desk</h3>
             <p className="mt-2 text-gray-600 dark:text-gray-400">Our engineers are available 24/7 to assist with sandbox-related issues.</p>
             <a href="mailto:support@cloudsandbox.local" className="mt-6 flex items-center text-brand-blue dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                support@cloudsandbox.local
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}