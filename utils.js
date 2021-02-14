const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;

module.exports = {
  checkFileExists: function checkFileExists(fileToCheck = 'index') {
    let file;
    if (fileToCheck === 'index') {
      file = fs.existsSync(path.join(process.cwd(), 'src/index.js'));
      expect(file).to.not.equal(
        false,
        'It seems you have not created the `index.js` file in `src/`.',
      );
    }

    if (fileToCheck === 'services') {
      file = fs.existsSync(path.join(process.cwd(), 'src/services.js'));
      expect(file).to.not.equal(
        false,
        'It seems you have not created the `services.js` file in `src/`.',
      );
    }

    return file;
  },
};
