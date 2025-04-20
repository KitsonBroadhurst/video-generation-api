import {makeProject} from '@revideo/core';

import './global.css';

import scene from './scene';

export default makeProject({
	scenes: [scene],
	settings: {
		shared: {
			size: {x: 768, y: 1408},
		},
	},
});
