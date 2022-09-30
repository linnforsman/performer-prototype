import { writable } from 'svelte/store';

const user = 'izaak.voltage@performer.ai';
const pass = 'when1equals2';

export const store = writable(null);

let sessions = [];

export const getUserDetails = async (username, password) => {
	if (username === user && password === pass) return 1;
};
