import qrcode from 'qrcode-generator';

export const BASE = 'https://tarjetas-presentacion.vercel.app';

/** Devuelve el SVG de un QR para la URL dada (se genera al compilar). */
export function qrSvg(url) {
	const qr = qrcode(0, 'M');
	qr.addData(url);
	qr.make();
	const n = qr.getModuleCount();
	const m = 4; // margen
	let d = '';
	for (let r = 0; r < n; r++)
		for (let c = 0; c < n; c++) if (qr.isDark(r, c)) d += `M${c + m} ${r + m}h1v1h-1z`;
	const s = n + m * 2;
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}" shape-rendering="crispEdges"><rect width="${s}" height="${s}" fill="#fff"/><path d="${d}" fill="#24203f"/></svg>`;
}
