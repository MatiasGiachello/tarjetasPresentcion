<script>
	import { onMount } from 'svelte';
	export let data;
	$: p = data.p;

	let lang = 'es';
	onMount(() => {
		const q = new URLSearchParams(location.search).get('lang');
		if (q === 'en' || q === 'es') lang = q;
		else {
			try {
				const g = localStorage.getItem('qr-lang');
				if (g === 'en' || g === 'es') lang = g;
			} catch {}
		}
	});
	function elegir(l) {
		lang = l;
		try {
			localStorage.setItem('qr-lang', l);
		} catch {}
	}

	$: nombre = `${lang === 'es' && p.titulo ? p.titulo + ' ' : ''}${p.nombre} ${p.apellido}`.trim();
	$: cargo = lang === 'en' && p.cargoEn ? p.cargoEn : p.cargo;
	$: corto = `QR ${p.nombre.split(' ')[0]}`;
</script>

<svelte:head>
	<title>{corto} · Surfactan</title>
	<link rel="manifest" href="/{p.slug}/qr/manifest.webmanifest" />
	<link rel="apple-touch-icon" href="/icono-180.png" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content={corto} />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<main class="qrpage">
	<img class="logo" src="/logo.png" alt="Surfactan" />

	<div class="qr" aria-label="Código QR de la tarjeta de {nombre}">
		{@html data.qr[lang]}
	</div>

	<p class="hint">{lang === 'es' ? 'Escaneá para ver mi tarjeta' : 'Scan to view my business card'}</p>

	<h1>{nombre}</h1>
	<p class="cargo">{cargo}</p>

	<div class="toggle" role="group" aria-label="Idioma">
		<button class:on={lang === 'es'} on:click={() => elegir('es')}>Español</button>
		<button class:on={lang === 'en'} on:click={() => elegir('en')}>English</button>
	</div>

	<a class="ver" href={lang === 'es' ? `/${p.slug}` : `/en/${p.slug}`}>
		{lang === 'es' ? 'Ver mi tarjeta' : 'View my card'}
	</a>
</main>

<style>
	:global(body:has(main.qrpage)) {
		background: #fff;
	}
	main {
		position: fixed;
		inset: 0;
		background: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: max(20px, env(safe-area-inset-top)) 20px max(20px, env(safe-area-inset-bottom));
		text-align: center;
		overflow-y: auto;
	}
	.logo {
		height: 44px;
		width: auto;
		margin-bottom: 18px;
	}
	.qr {
		width: min(82vw, 58vh, 420px);
		aspect-ratio: 1;
	}
	.qr :global(svg) {
		width: 100%;
		height: 100%;
		display: block;
	}
	.hint {
		margin-top: 10px;
		color: #5d6677;
		font-size: 15px;
	}
	h1 {
		margin-top: 18px;
		font-size: 22px;
		font-weight: 700;
		color: #1a1d2e;
	}
	.cargo {
		color: #0569b3;
		font-weight: 600;
		margin-top: 4px;
		font-size: 15px;
	}
	.toggle {
		display: inline-flex;
		margin-top: 22px;
		background: #f3f6fa;
		border: 1px solid #e3e8ef;
		border-radius: 999px;
		padding: 4px;
	}
	.toggle button {
		border: 0;
		background: transparent;
		font: 600 15px Inter, system-ui, sans-serif;
		color: #5d6677;
		padding: 10px 22px;
		border-radius: 999px;
		cursor: pointer;
	}
	.toggle button.on {
		background: linear-gradient(110deg, #24203f, #0569b3);
		color: #fff;
	}
	.ver {
		margin-top: 18px;
		color: #0569b3;
		font-weight: 500;
		font-size: 14px;
		text-decoration: none;
	}
</style>
