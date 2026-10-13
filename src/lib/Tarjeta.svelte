<script>
	import { empresa } from '$lib/personas.js';

	/** @type {{slug:string,titulo?:string,nombre:string,apellido:string,cargo:string,email:string,celular?:string,interno?:string,foto?:string}} */
	export let p;
	/** 'es' o 'en' */
	export let lang = 'es';

	const textos = {
		es: {
			whatsapp: 'WhatsApp', llamar: 'Llamar', email: 'Email', web: 'Web', guardar: 'Guardar contacto',
			celular: 'Celular', telEmpresa: 'Teléfono empresa', interno: 'Interno', direccion: 'Dirección',
			horarioT: 'Horario', horario: 'Lunes a viernes de 09:00 a 17:00', desde: 'Experiencia desde 1964',
			en: ' en ', saludo: (n) => `Hola ${n}, te escribo desde tu tarjeta de Surfactan S.A.`,
			otro: 'English version', otroHref: (slug) => `/en/${slug}`
		},
		en: {
			whatsapp: 'WhatsApp', llamar: 'Call', email: 'Email', web: 'Website', guardar: 'Save contact',
			celular: 'Mobile', telEmpresa: 'Office phone', interno: 'Ext.', direccion: 'Address',
			horarioT: 'Business hours', horario: 'Monday to Friday, 9:00 a.m. to 5:00 p.m. (GMT-3)',
			desde: 'Experience since 1964', en: ' at ',
			saludo: (n) => `Hi ${n}, I'm reaching out from your Surfactan S.A. business card.`,
			otro: 'Versión en español', otroHref: (slug) => `/${slug}`
		}
	};
	$: t = textos[lang] || textos.es;
	$: cargo = lang === 'en' && p.cargoEn ? p.cargoEn : p.cargo;
	$: direccion = lang === 'en' ? `${empresa.direccion}, Argentina` : empresa.direccion;

	$: nombreCompleto = `${p.nombre} ${p.apellido}`.trim();
	$: nombreVisible = (lang === 'es' && p.titulo ? `${p.titulo} ` : '') + nombreCompleto;
	$: iniciales = (p.nombre[0] + (p.apellido ? p.apellido[0] : '')).toUpperCase();
	$: cel = p.celular ? `+549${p.celular}` : '';
	$: celTexto = p.celular ? `11 ${p.celular.slice(2, 6)}-${p.celular.slice(6)}` : '';
	$: whatsapp = p.celular
		? `https://wa.me/549${p.celular}?text=${encodeURIComponent(t.saludo(p.nombre))}`
		: '';

	let fotoOk = true;

	function guardarContacto() {
		const lineas = [
			'BEGIN:VCARD',
			'VERSION:3.0',
			`N:${p.apellido};${p.nombre};;${p.titulo || ""};`,
			`FN:${nombreCompleto}`,
			`ORG:${empresa.nombre}`,
			`TITLE:${cargo}`,
			`EMAIL;TYPE=WORK:${p.email}`,
			cel ? `TEL;TYPE=CELL:${cel}` : '',
			`TEL;TYPE=WORK,VOICE:${empresa.telefono}${p.interno ? ' int. ' + p.interno : ''}`,
			'ADR;TYPE=WORK:;;Malvinas Argentinas 4495;Victoria;Buenos Aires;B1644CAS;Argentina',
			`URL:${empresa.web}`,
			'END:VCARD'
		].filter(Boolean);
		const blob = new Blob([lineas.join('\r\n')], { type: 'text/vcard;charset=utf-8' });
		const a = document.createElement('a');
		a.href = URL.createObjectURL(blob);
		a.download = `${p.slug}-surfactan.vcf`;
		document.body.appendChild(a);
		a.click();
		a.remove();
	}
</script>

<svelte:head>
	<title>{nombreCompleto} · {empresa.nombre}</title>
	<meta name="description" content="{nombreCompleto}, {cargo}{t.en}{empresa.nombre}" />
</svelte:head>

<main class="card" lang={lang}>
	<header class="top">
		<img class="logo" src="/logo.png" alt="Surfactan" width="130" height="70" />
	</header>
	<div class="band">
		<div class="avatar">
			{#if p.foto && fotoOk}
				<img src="/fotos/{p.foto}" alt={nombreCompleto} on:error={() => (fotoOk = false)} />
			{:else}
				<span>{iniciales}</span>
			{/if}
		</div>
	</div>

	<section class="who">
		<h1>{nombreVisible}</h1>
		<p>{cargo}</p>
		<span>{empresa.nombre}</span>
	</section>

	<nav class="actions" class:four={!!p.celular}>
		{#if p.celular}
			<a class="act wa" href={whatsapp} target="_blank" rel="noopener">
				<svg viewBox="0 0 24 24"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9.5 8.5c0 3 2.5 6 6 6l1-1.5-2-1-1 .8c-1-.5-1.8-1.3-2.3-2.3l.8-1-1-2z" /></svg>
				{t.whatsapp}
			</a>
			<a class="act" href="tel:{cel}">
				<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
				{t.llamar}
			</a>
		{:else}
			<a class="act" href="tel:{empresa.telefono}">
				<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
				{t.llamar}
			</a>
		{/if}
		<a class="act" href="mailto:{p.email}">
			<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
			{t.email}
		</a>
		<a class="act" href={empresa.web} target="_blank" rel="noopener">
			<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>
			{t.web}
		</a>
	</nav>

	<button class="save" on:click={guardarContacto}>
		<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" /></svg>
		{t.guardar}
	</button>

	<ul class="list">
		<li>
			<a href="mailto:{p.email}">
				<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
				<div><b>{t.email}</b><span>{p.email}</span></div>
			</a>
		</li>
		{#if p.celular}
			<li>
				<a href="tel:{cel}">
					<svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></svg>
					<div><b>{t.celular}</b><span>{celTexto}</span></div>
				</a>
			</li>
		{/if}
		<li>
			<a href="tel:{empresa.telefono}">
				<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
				<div>
					<b>{t.telEmpresa}</b><span>{empresa.telefonoTexto}{p.interno ? ` · ${t.interno} ${p.interno}` : ''}</span>
				</div>
			</a>
		</li>
		<li>
			<a href={empresa.mapa} target="_blank" rel="noopener">
				<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
				<div><b>{t.direccion}</b><span>{direccion}</span></div>
			</a>
		</li>
		<li>
			<div class="row">
				<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
				<div><b>{t.horarioT}</b><span>{t.horario}</span></div>
			</div>
		</li>
	</ul>

	<footer>
		{t.desde} · <a href={empresa.web} target="_blank" rel="noopener">{empresa.webTexto}</a>
		<a class="lang" href={t.otroHref(p.slug)}>{t.otro}</a>
	</footer>
</main>

<style>
	.card {
		width: 100%;
		max-width: 420px;
		background: #fff;
		border-radius: 22px;
		overflow: hidden;
		box-shadow: 0 14px 44px rgba(36, 32, 63, 0.16);
	}
	.top {
		display: flex;
		justify-content: center;
		padding: 20px 20px 16px;
		background: #fff;
	}
	.logo {
		height: 64px;
		width: auto;
	}
	.band {
		height: 76px;
		background: linear-gradient(110deg, var(--navy) 0%, var(--blue) 70%, #2a8ad6 100%);
		position: relative;
	}
	.avatar {
		width: 124px;
		height: 124px;
		border-radius: 50%;
		border: 5px solid #fff;
		background: #e3edf7;
		position: absolute;
		left: 50%;
		bottom: -62px;
		transform: translateX(-50%);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 6px 18px rgba(36, 32, 63, 0.18);
	}
	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.avatar span {
		font-size: 42px;
		font-weight: 700;
		color: var(--blue);
	}
	.who {
		text-align: center;
		padding: 76px 24px 6px;
	}
	.who h1 {
		font-size: 25px;
		font-weight: 700;
		color: var(--ink);
		line-height: 1.2;
	}
	.who p {
		color: var(--blue);
		font-weight: 600;
		margin-top: 6px;
	}
	.who span {
		display: block;
		color: var(--muted);
		font-size: 14px;
		margin-top: 2px;
	}
	.actions {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		padding: 20px 20px 4px;
	}
	.actions.four {
		grid-template-columns: repeat(4, 1fr);
	}
	.act {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		text-decoration: none;
		color: var(--ink);
		font-size: 12px;
		font-weight: 500;
		padding: 12px 2px;
		border-radius: 14px;
		background: var(--soft);
		border: 1px solid var(--line);
	}
	.act svg,
	.list svg {
		width: 22px;
		height: 22px;
		stroke: var(--blue);
		fill: none;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	.act.wa svg {
		stroke: #1fa855;
	}
	.save {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin: 14px 20px 4px;
		width: calc(100% - 40px);
		padding: 15px;
		border: 0;
		border-radius: 14px;
		background: linear-gradient(110deg, var(--navy), var(--blue));
		color: #fff;
		font: 600 15px inherit;
		font-family: inherit;
		cursor: pointer;
	}
	.save svg {
		width: 20px;
		height: 20px;
		stroke: #fff;
		fill: none;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	.list {
		list-style: none;
		padding: 12px 20px 0;
	}
	.list li {
		border-top: 1px solid var(--line);
	}
	.list a,
	.list .row {
		display: flex;
		gap: 14px;
		align-items: flex-start;
		padding: 14px 4px;
		text-decoration: none;
		color: var(--ink);
	}
	.list svg {
		flex: none;
		width: 20px;
		height: 20px;
		margin-top: 2px;
	}
	.list b {
		display: block;
		font-size: 12px;
		color: var(--muted);
		font-weight: 500;
		margin-bottom: 2px;
	}
	.list span {
		font-size: 15px;
		word-break: break-word;
	}
	footer {
		text-align: center;
		color: var(--muted);
		font-size: 12px;
		padding: 18px 20px 24px;
		border-top: 1px solid var(--line);
		margin-top: 4px;
	}
	.lang {
		display: block;
		margin-top: 10px;
		font-weight: 500 !important;
		font-size: 13px;
	}
	footer a {
		color: var(--blue);
		text-decoration: none;
		font-weight: 600;
	}
</style>
