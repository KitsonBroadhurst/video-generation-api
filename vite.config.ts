import {defineConfig} from 'vite';
import motionCanvas from '@revideo/vite-plugin';

export default defineConfig({
	plugins: [motionCanvas()],
	server: {
		host: true,
		port: 4000,
	},
});
