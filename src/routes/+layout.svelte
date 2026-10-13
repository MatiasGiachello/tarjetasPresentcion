<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
	<meta name="theme-color" content="#0569b3" />
</svelte:head>

<div class="page"><slot /></div>

<style>
	:global(:root) {
		--blue: #0569b3;
		--navy: #24203f;
		--ink: #1a1d2e;
		--muted: #5d6677;
		--soft: #f3f6fa;
		--line: #e3e8ef;
	}
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	:global(body) {
		font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
		background: #eaf0f6;
		color: var(--ink);
	}
	.page {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding: 24px 16px 40px;
	}
</style>
