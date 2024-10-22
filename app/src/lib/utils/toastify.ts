import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';

export const success = (toastStore: ToastStore, msg: string) => {
	
	const toast: ToastSettings = {
		message: msg,
		background: 'variant-filled-tertiary',
		timeout: 2000,
	};

	toastStore.trigger(toast);
};
export const error = (toastStore: ToastStore, msg: string) => {
	
	const toast: ToastSettings = {
		message: msg,
		background: 'variant-filled-error',
		timeout: 2000,
	};

	toastStore.trigger(toast);
};