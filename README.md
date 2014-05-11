# grunt-template4js

> Use template in js files. Just for my own project, did not do any optimization for it yet.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-template4js --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-template4js');
```

## The "template4js" task

### Overview
In your project's Gruntfile, add a section named `template4js` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    template4js: {
      test: {
        options: {
        	modules: 'test/views/modules'
        },
        files:{
        	'tmp/test.js':['test/views/test.jst']
        }
      },
    }
});
```

### Options

#### options.modules
Type: `String`
no default value

A string value that is used to point out the module directory.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
    template4js: {
      test: {
        options: {
        	modules: 'test/views/modules'
        },
        files:{
        	'tmp/test.js':['test/views/test.jst']
        }
      },
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
