import toast, { ToastOptions } from 'react-hot-toast';
import { CheckCircleIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

interface ISuccess {
  message: string;
  options?: ToastOptions;
}

export const Success = ({ message, options }: ISuccess) => {
  toast.custom(
    (t) => (
      <div
        className={clsx(
          'flex rounded-lg bg-gray-900 py-2.5 px-3 shadow-lg ring-1 ring-black ring-opacity-5',
          {
            'animate-in fade-in': t.visible,
            'fade-out animate-out': !t.visible,
          }
        )}
      >
        <CheckCircleIcon className="h-6 w-6 text-gray-700" />
        <div className="ml-2 text-gray-300">{message}</div>
      </div>
    ),
    {
      duration: 250,
      ...options,
    }
  );
};
