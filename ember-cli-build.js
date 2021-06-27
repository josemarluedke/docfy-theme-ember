'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

const env = EmberAddon.env();

const postcssPlugins = [
  require('postcss-import')({ path: ['node_modules'] }),
  require('tailwindcss')('./tailwind.config.js'),
  require('autoprefixer')
];

if (env !== 'development') {
  process.env.PURGE_CSS = 'true';
}
if (env === 'production') {
  // Tailwind JIT
  process.env.TAILWIND_MODE = 'build';
}

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        // cacheInclude: [/.*\.css$/, /tailwind\.config\.js$/],
        plugins: postcssPlugins
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
