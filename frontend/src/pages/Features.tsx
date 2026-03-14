import { Box, Cpu, Shuffle, Layers } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'Instant Delivery',
      description: 'Spin up a container in under 5 seconds utilizing pre-built layered images.',
      icon: Cpu,
    },
    {
      name: 'Interactive Shell',
      description: 'Interact with your instances via Xterm.js directly in your browser.',
      icon: Box,
    },
    {
      name: 'Automated Port Mapping',
      description: 'Dynamic allocation ensures your services are safely exposed without conflict.',
      icon: Shuffle,
    },
    {
      name: 'Persistent Storage',
      description: 'Databases and critical files remain secure even if the container restarts.',
      icon: Layers,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32 min-h-screen transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue dark:text-blue-400">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark dark:text-white sm:text-4xl">
            Everything you need for sandbox dev
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our platform provides the basic building blocks to test your applications without fear of breaking your local machine.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
