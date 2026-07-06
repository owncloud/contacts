module.exports = function debug(topic) {
  return function(message) {
    if (debug.enabled) {
      console.log(`[${topic}] ${message}`);
    }
  };
};
