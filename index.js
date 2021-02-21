const path = require('path');

const composition = require('./utils/composition');

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

const processWords = composition(
    readDirectory,
    filterFiles('.srt'),
    readFiles,
    splitJoinContent,
    removeEmptyLine,
    removeTimeLines('-->'),
    removeNumbers,
    replaceCaracter(symbols),
    joinLines(' '),
    splitWords,
    removeEmptyLine,
    groupWords,
    sortByAttr('qtde'),
    writeFile(path.join(__dirname, 'data/result.csv')),
)

processWords(legPath)
    .then(console.log);