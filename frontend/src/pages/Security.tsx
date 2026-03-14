import { Shield, Lock, Server } from 'lucide-react';

export default function Security() {
  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32 min-h-screen transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue dark:text-blue-400">Security First</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Enterprise-grade isolation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Every container is spun up using strict Docker boundaries, meaning your code runs in a fully protected boundary distinct from the host system.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                Process Isolation
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                Sandboxes have limits enforced by cgroups and namespaces, completely removing any possibility of process crossover.
              </dd>
            </div>
            
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                Network Segmentation
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                Dynamic port scaling prevents network conflict and strictly binds external traffic.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}