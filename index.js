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
    replaceCaracter,
    splitWords,
    joinLines
} = require('./utils/treat');

const legPath = path.join(__dirname, 'data');

const symbols = [
    '.', '?', '-', ',', '"', '_', '<i>',
    '</i>', '\r', '[', ']', '(', ')', "'"
];

function groupWords(words) {
    return words.reduce((group, word) => {
        const newWord = word.toLowerCase();
        if(group[newWord]) {
            group[newWord] += 1;
        } else {
            group[newWord] = 1;
        }

        return group;
    }, {})
}

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
    .then(console.log)