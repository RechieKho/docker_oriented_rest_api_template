import path = require('path');
import fs = require('fs');
import assert = require('assert');

const projectDirectory = path.dirname(__dirname);
const packageData = JSON.parse(
  fs.readFileSync(path.join(projectDirectory, 'package.json')).toString()
);

export = {
  projectDirectory,
  packageData,
};
