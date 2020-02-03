var ghpages = require('gh-pages');
 
 /**
 * Given the following directory structure:
 *
 *   dist/
 *     index.html
 *     js/
 *       site.js
 *
 * The usage below will create a `gh-pages` branch that looks like this:
 *
 *   index.html
 *   js/
 *     site.js
 *
 */
ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/LightMan/lightman.github.io/'
}, (error => {
  if (error) {
    console.log('Deployed with error', error);
  } else {
    console.log('Deployed successfully');
  }
}));