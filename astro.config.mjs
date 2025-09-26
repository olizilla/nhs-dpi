// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NHS 🤝 DPI',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/olizilla/nhs-dpi' }],
			sidebar: [
				{
					label: 'Maps',
					items: [
						{ 
							label: 'Distinct EPR Systems per County',
							link: '/map'
						}
					]
				},
				{
					label: 'Research',
					autogenerate: { directory: 'research' },
				},
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
