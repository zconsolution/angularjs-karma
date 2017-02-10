// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'lib/angular.min.js',
	  'lib/angular-mocks.js',
	  'app/*.js',
	  'tests/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    reporters: ['progress'],


    // web server port
    port: 9001,


    // logging options
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    browsers: ['Chrome']

    
  })
}
