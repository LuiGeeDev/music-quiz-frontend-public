const constants = require("./directoryConstants");
const fs = require("fs");

module.exports = fs
  .readdirSync(`${constants.SRC_DIR}/js`)
  .filter((filename) => filename.endsWith("js"))
  .reduce((entry, js) => {
    const jsName = js.split(".")[0];
    entry[jsName] = `./src/js/${js}`;
    return entry;
  }, {});
