/*
 * Karma configuration
 * 
 * We need to use webpack and vue-loader in order to handle vue components
 */

//reuse original webpack configuration
var webpackConfig = require('../webpack.config.js')
delete webpackConfig.entry

module.exports = function(config) {
    config.set({
        basePath: './',
        browsers: ['PhantomJS'],
        frameworks: ['jasmine', 'sinon-stub-promise', 'sinon-chai', 'chai'],
        reporters: ['spec'],
        files: [
            './**/*.spec.js',
        ],
        preprocessors: {
            './**/*.spec.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        singleRun: true
    })
}