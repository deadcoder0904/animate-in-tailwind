import toast, { ToastOptions } from 'react-hot-toast';

import { Success } from './Success';

export const showToast = (
  variant: 'success' | 'warning' | 'error' | 'multi-choice',
  message: string,
  options?: ToastOptions,
  yes?: () => void,
  no?: () => void
) => {
  // TODO: redesign success, warning & error variant as need arises
  switch (variant) {
    case 'error':
      toast.error(message, {
        duration: 6000,
        style: {
          borderRadius: '2px',
          background: '#FEE2E2',
          color: '#B91C1C',
          boxShadow: 'none',
        },
        ...options,
      });
      break;
    case 'warning':
      toast(message, {
        duration: 6000,
        style: {
          borderRadius: '2px',
          background: '#FFEDD5',
          color: '#C2410C',
          boxShadow: 'none',
        },
        ...options,
      });
      break;
    case 'multi-choice':
      toast.custom(
        (t) => (
          <div className="m-0 flex items-center justify-between rounded-md border-2 border-gray-800 bg-gray-900 px-2 py-2 text-gray-300">
            <p className="mr-4 text-sm text-gray-300">{message}</p>
            <button
              type="button"
              className="mx-2 inline-flex h-6 flex-1 items-center justify-center rounded-md px-3 py-1 text-center text-sm font-medium leading-4 text-gray-300 shadow-md dark:bg-rose-700"
              onClick={() => {
                toast.remove(t.id);
                yes && yes();
              }}
            >
              Yes
            </button>
            <button
              type="button"
              className="mx-2 inline-flex h-6 flex-1 items-center justify-center rounded-md px-3 py-1 text-center text-sm font-medium leading-4 text-gray-300 shadow-md dark:bg-gray-800"
              onClick={() => {
                toast.remove(t.id);
                no && no();
              }}
            >
              No
            </button>
          </div>
        ),
        {
          duration: Infinity, // keeps the toast open forever
          ...options,
        }
      );
      break;
    case 'success':
    default:
      Success({ message, options });
  }
};
