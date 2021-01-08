const path = require('path');

const libraryTargets = ['var', 'this', 'window', 'global', 'commonjs', 'commonjs2', 'amd', 'amd-require', 'umd', 'system', 'jsonp'];

const base = {
	context: __dirname,
	mode: 'production',
	optimization: {
		minimize: false,
	},
	externals: [
		/lodash/,
	],
	entry: './src/index.js',
};

module.exports = libraryTargets.map(libraryTarget => ({
	...base,
	output: {
		path: path.resolve(base.context, `./dist/${libraryTarget}`),
		libraryTarget,
		library: libraryTarget.startsWith('amd') ? undefined : 'test',
	},
}));