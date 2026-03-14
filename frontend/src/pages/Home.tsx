import { ArrowRight, Terminal } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleTryMe = () => {
        const hasToken = !!localStorage.getItem('token');
        if (hasToken) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-200">
            {/* Hero Section */}
            <div className="relative isolate pt-14">
                <div className="py-24 sm:py-32 lg:pb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-brand-dark dark:text-white sm:text-6xl">
                                Deploy secure containers in seconds
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                Experience full isolation with our secure sandbox environment.
                                Spin up to 3 rapid development containers, complete with an interactive terminal and zero fuss.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <button
                                    onClick={handleTryMe}
                                    className="rounded-md bg-brand-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center gap-2 transition-all"
                                >
                                    Try Me <ArrowRight className="w-4 h-4" />
                                </button>
                                <Link to="/features" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white group">
                                    Learn more <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}