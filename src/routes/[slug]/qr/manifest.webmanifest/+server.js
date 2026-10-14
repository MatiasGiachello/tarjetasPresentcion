import { personas, buscar } from '$lib/personas.js';

export const prerender = true;

export function entries() {
	return personas.map((p) => ({ slug: p.slug }));
}

/** Manifiesto para "Agregar a pantalla de inicio": el ícono abre directo el QR de esa persona. */
export function GET({ params }) {
	const p = buscar(params.slug);
	const corto = p ? `QR ${p.nombre.split(' ')[0]}` : 'QR Surfactan';
	const body = {
		name: p ? `QR · ${p.nombre} ${p.apellido}`.trim() : 'QR Surfactan',
		short_name: corto,
		start_url: `/${params.slug}/qr`,
		scope: `/${params.slug}/qr`,
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#ffffff',
		icons: [
			{ src: '/icono-192.png', sizes: '192x192', type: 'image/png' },
			{ src: '/icono-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' }
		]
	};
	return new Response(JSON.stringify(body), {
		headers: { 'content-type': 'application/manifest+json' }
	});
}
