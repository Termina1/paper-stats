var path = require('path');

module.exports = function() {
  return path.relative(process.cwd(), path.join(__dirname, 'statistics_events.yml'));
};