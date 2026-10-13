// ─────────────────────────────────────────────────────────────
//  DATOS DE LAS TARJETAS
//  Para agregar, quitar o cambiar a alguien, se edita SOLO este archivo.
//
//  slug     → la dirección de la tarjeta: tarjetas-presentacion.vercel.app/<slug>
//  foto     → archivo dentro de /static/fotos/ (cuadrado, ~480x480).
//             Si se deja vacío, se muestran las iniciales.
//  celular  → solo números, sin 0 ni 15 (ej: 1140286735). Se usa para WhatsApp y llamar.
//  interno  → interno del conmutador (opcional).
//  cargoEn  → cargo en inglés para la versión /en/<slug> (si falta, se usa el de español).
// ─────────────────────────────────────────────────────────────

export const empresa = {
	nombre: 'Surfactan S.A.',
	direccion: 'Malvinas Argentinas 4495, (B1644CAS) Victoria, Buenos Aires',
	mapa: 'https://www.google.com/maps/search/?api=1&query=Malvinas+Argentinas+4495,+Victoria,+Buenos+Aires',
	telefono: '+541147144085',
	telefonoTexto: '+54 (11) 4714-4085 / 4097',
	web: 'https://www.surfactan.com.ar/es',
	webTexto: 'surfactan.com.ar',
	horario: 'Lunes a viernes de 09:00 a 17:00'
};

/** @type {Array<{slug:string,nombre:string,apellido:string,cargo:string,cargoEn?:string,email:string,celular?:string,interno?:string,foto?:string}>} */
export const personas = [
	{
		slug: 'matias-giachello',
		nombre: 'Matías',
		apellido: 'Giachello',
		cargo: 'Departamento de Sistemas',
		email: 'mgiachello@surfactan.com.ar',
		celular: '1167497237',
		interno: '102 / 107',
		foto: 'matias-giachello.jpg'
	},
	{
		slug: 'alejandro-alcacer',
		nombre: 'Alejandro',
		apellido: 'Mackinlay Alcacer',
		cargo: 'Director',
		email: 'aam@surfactan.com.ar',
		interno: '112'
	},
	{
		slug: 'ariel-olano',
		nombre: 'Ariel',
		apellido: 'Olano',
		cargo: 'Recursos Humanos',
		email: 'aolano@surfactan.com.ar',
		celular: '1155774411',
		interno: '117',
		foto: 'ariel-olano.jpg'
	},
	{
		slug: 'daniel-rodriguez',
		nombre: 'Daniel',
		apellido: 'Rodríguez',
		cargo: 'Gerente de Producción',
		cargoEn: 'Production Manager',
		email: 'drodriguez@surfactan.com.ar',
		celular: '1140286735',
		interno: '205'
	},
	{
		slug: 'david',
		nombre: 'David',
		apellido: '',
		cargo: 'Programador Principal de Sistemas',
		email: 'soporte@surfactan.com.ar',
		celular: '1142875462',
		interno: '102',
		foto: 'david.jpg'
	},
	{
		slug: 'edgardo-chimenti',
		nombre: 'Edgardo Nicolás',
		apellido: 'Chimenti',
		cargo: 'Vendedor',
		email: 'echimienti@surfactan.com.ar',
		celular: '1144406638',
		interno: '103'
	},
	{
		slug: 'german-rodriguez',
		nombre: 'Germán',
		apellido: 'Rodríguez',
		cargo: 'Ventas · División Química Fina',
		email: 'grodriguez@surfactan.com.ar',
		celular: '1155774412',
		interno: '137',
		foto: 'german-rodriguez.jpg'
	},
	{
		slug: 'gustavo-giachello',
		nombre: 'Gustavo',
		apellido: 'Giachello',
		cargo: 'Gerente de Recursos Humanos',
		email: 'ggiachello@surfactan.com.ar',
		celular: '1155774418',
		interno: '137',
		foto: 'gustavo-giachello.jpg'
	},
	{
		slug: 'juan-sanchez',
		nombre: 'Juan Francisco',
		apellido: 'Sánchez',
		cargo: 'Director · Gerente de Compras',
		email: 'juanfs@surfactan.com.ar',
		celular: '1141660935',
		interno: '125'
	},
	{
		slug: 'lucas-alcacer',
		nombre: 'Lucas',
		apellido: 'Mackinlay Alcacer',
		cargo: 'Director · Administración',
		email: 'lam@surfactan.com.ar',
		celular: '1151769721',
		interno: '137'
	},
	{
		slug: 'luis-santos',
		nombre: 'Luis',
		apellido: 'Santos',
		cargo: 'Director',
		email: 'lsantos@surfactan.com.ar',
		interno: '123'
	},
	{
		slug: 'maria-laura-arias',
		nombre: 'María Laura',
		apellido: 'Arias',
		cargo: 'Gerente de Compras · Purchasing Manager',
		email: 'mlarias@surfactan.com.ar',
		celular: '1140286784',
		interno: '109',
		foto: 'maria-laura-arias.jpg'
	},
	{
		slug: 'rodolfo-fayo',
		nombre: 'Rodolfo',
		apellido: 'Fayo',
		cargo: 'Departamento de Ventas',
		email: 'rfayo@surfactan.com.ar',
		celular: '1144405985',
		interno: '115'
	},
	{
		slug: 'sergio-liotti',
		nombre: 'Sergio',
		apellido: 'Liotti',
		cargo: 'Recursos Humanos',
		email: 'sergiol@surfactan.com.ar',
		celular: '1155774411',
		interno: '113'
	},
	{
		slug: 'sergio-sans',
		nombre: 'Sergio Daniel',
		apellido: 'Sans',
		cargo: 'Jefe de Mantenimiento e Ingeniería',
		email: 'ssans@surfactan.com.ar',
		celular: '1140286838',
		interno: '210',
		foto: 'sergio-sans.jpg'
	}
];

export const buscar = (slug) => personas.find((p) => p.slug === slug);
