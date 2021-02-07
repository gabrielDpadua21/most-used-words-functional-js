const path = require('path');
const {
    readDirectory
} = require('./utils/files');

const {
    filterFiles
} = require('./utils/treat');

const legPath = path.join(__dirname, 'data');


readDirectory(legPath)
    .then(data => filterFiles(data, '.srt'))
    .then(data => console.log(data))