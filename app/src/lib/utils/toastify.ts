import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';

export const success = (toastStore: ToastStore, msg: string) => {
	
	const toast: ToastSettings = {
		message: msg,
		background: 'variant-filled-tertiary',
		timeout: 3000,
	};

	toastStore.trigger(toast);
};