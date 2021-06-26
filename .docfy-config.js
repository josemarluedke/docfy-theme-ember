const path = require('path');
const autolinkHeadings = require('remark-autolink-headings');
// const highlight = require('remark-highlight.js');
const withProse = require('@docfy/plugin-with-prose');
const codeTitle = require('remark-code-titles');
const highlight = require('rehype-highlight');

/**
 * @type {import('@docfy/core/lib/types').DocfyConfig}
 */
module.exports = {
  repository: {
    url: 'https://github.com/josemarluedke/docfy-theme-ember',
    editBranch: 'main'
  },
  tocMaxDepth: 3,
  plugins: [withProse({ className: 'prose dark:prose-light' })],
  remarkPlugins: [
    codeTitle,
    autolinkHeadings
    // highlight
  ],
  rehypePlugins: [highlight],
  sources: [
    {
      root: path.resolve(__dirname, '../glimmer-apollo/docs'),
      pattern: '**/*.md',
      urlPrefix: 'docs'
    }
  ],
  labels: {
    docs: 'Documentation',
    fetching: 'Fetching'
  }
};
