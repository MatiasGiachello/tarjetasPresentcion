<!-- La dirección principal (sin nombre) muestra la tarjeta de Matías, como antes. -->
<script>
	import Tarjeta from '$lib/Tarjeta.svelte';
	import { buscar } from '$lib/personas.js';
	const p = buscar('matias-giachello');
</script>

<Tarjeta {p} />
