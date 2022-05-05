/* gulpfile.js */
// https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/
const uswds = require("@uswds/compile");

/**
 * USWDS version
 * Set the version of USWDS you're using (2 or 3)
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */
uswds.paths.src.projectSass = './app/javascript/uswds/sass';
uswds.paths.dist.theme = './app/javascript/uswds';
uswds.paths.dist.img = './app/assets/builds/uswds';
uswds.paths.dist.fonts = './app/assets/builds/uswds';
uswds.paths.dist.js = './app/assets/builds/uswds';
uswds.paths.dist.css = './app/assets/builds/uswds';
uswds.paths.dist.sass = './app/assets/builds/uswds';

/**
 * Exports
 * Add as many as you need
 */

exports.compileIcons = uswds.compileIcons;
exports.compileSass = uswds.compileSass;
exports.compile = uswds.compile;
exports.copyAll = uswds.copyAll;
exports.copyAssets = uswds.copyAssets;
exports.copyFonts = uswds.copyFonts;
exports.copyImages = uswds.copyImages;
exports.copyJS = uswds.copyJS;
exports.copySetup = uswds.copySetup;
exports.default = uswds.default;
exports.init = uswds.init;
exports.updateUswds = uswds.updateUswds;
exports.watch = uswds.watch;
