import { error } from '@sveltejs/kit';
import { personas, buscar } from '$lib/personas.js';

/** Genera una página por cada persona del listado. */
export function entries() {
	return personas.map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
	const p = buscar(params.slug);
	if (!p) error(404, 'Tarjeta no encontrada');
	return { p };
}
