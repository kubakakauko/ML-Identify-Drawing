const utils = {};

utils.printProgress = (current, total) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  const percent = ((current / total) * 100).toFixed(2);
  process.stdout.write(`Progress: ${percent}%`);
};

if(typeof module !== "undefined") {
  module.exports = utils;
}
