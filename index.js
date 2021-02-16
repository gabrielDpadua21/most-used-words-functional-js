const path = require('path');
const {
    readDirectory,
    readFiles,
    writeFile
} = require('./utils/files');

const {
    filterFiles,
    splitJoinContent,
    removeEmptyLine,
    removeTimeLines,
    removeNumbers,
    replaceCaracter,
    splitWords,
    joinLines,
    groupWords,
    sortByAttr
} = require('./utils/treat');

const legPath = path.join(__dirname, 'data');

const symbols = [
    '.', '?', '-', ',', '"', '_', '<i>',
    '</i>', '\r', '[', ']', '(', ')', "'", '--'
];

// Functions composition
readDirectory(legPath)
    .then(files => filterFiles(files, '.srt'))
    .then(paths => readFiles(paths))
    .then(content => splitJoinContent(content))
    .then(removeEmptyLine)
    .then(removeTimeLines('-->'))
    .then(removeNumbers)
    .then(replaceCaracter(symbols))
    .then(joinLines(' '))
    .then(splitWords)
    .then(removeEmptyLine)
    .then(groupWords)
    .then(sortByAttr('qtde', 'desc'))
    .then(data => writeFile(path.join(__dirname, 'data/result.csv'), data))
    .then(console.log)