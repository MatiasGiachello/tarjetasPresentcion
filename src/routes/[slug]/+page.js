import { error } from '@sveltejs/kit';
import { todosLosSlugs, buscar } from '$lib/personas.js';

/** Genera una página por cada persona del listado. */
export function entries() {
	return todosLosSlugs();
}

export function load({ params }) {
	const p = buscar(params.slug);
	if (!p) error(404, 'Tarjeta no encontrada');
	return { p };
}
