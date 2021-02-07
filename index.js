const path = require('path');
const {
    readDirectory
} = require('./utils/files');

const {
    filterFiles
} = require('./utils/treat');

const legPath = path.join(__dirname, 'data');


readDirectory(legPath)
    .then(filterFiles)
    .then(data => console.log(data))