import { error } from '@sveltejs/kit';
import { todosLosSlugs, buscar } from '$lib/personas.js';
import { BASE, qrSvg } from '$lib/qr.js';

export function entries() {
	return todosLosSlugs();
}

export function load({ params }) {
	const p = buscar(params.slug);
	if (!p) error(404, 'Tarjeta no encontrada');
	return {
		p,
		qr: {
			es: qrSvg(`${BASE}/${p.slug}`),
			en: qrSvg(`${BASE}/en/${p.slug}`)
		}
	};
}
