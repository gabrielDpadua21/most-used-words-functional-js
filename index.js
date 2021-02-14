const path = require('path');
const {
    readDirectory,
    readFiles
} = require('./utils/files');

const {
    filterFiles,
    splitJoinContent,
    removeEmptyLine,
    removeTimeLines,
    removeNumbers,
    replaceCaracter
} = require('./utils/treat');

const legPath = path.join(__dirname, 'data');

const symbols = [
    '.', '?', '-', ',', '"', '_', '<i>', 
    '</i>', '\r', '[', ']', '(', ')'
];

readDirectory(legPath)
    .then(files => filterFiles(files, '.srt'))
    .then(paths => readFiles(paths))
    .then(content => splitJoinContent(content))
    .then(removeEmptyLine)
    .then(removeTimeLines('-->'))
    .then(removeNumbers)
    .then(replaceCaracter(symbols))
    .then(console.log)
