import { writable } from 'svelte/store';

export const categoryId = writable<number>(0);
export const disableLPAnimation = writable<boolean>(true);