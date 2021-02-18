const filterFiles = (files, extension) => {
    return new Promise((resolve, reject) => {
        try {
            files = files.filter(file => {
                return file.endsWith(extension)
            })
            resolve(files);
        } catch(err) {
            reject(err);
        }
    });
}

const splitJoinContent = content => {
    return content.join('\n').split('\n');
}

const removeEmptyLine = contentArray => {
    return contentArray.filter(line => line.trim())
}

const removeTimeLines = (substring, contentArray) => {
    return function(contentArray) {
        return contentArray.filter(line => !line.includes(substring));
    }
}

const removeNumbers = contentArray => {
    return contentArray.filter(line => line.search('[0-9]+') < 0)
}

const replaceCaracter = (symbols) => {
    return function(contentArray) {
        return contentArray.map(line => {
            return symbols.reduce((acc,symbol) => {
                return acc.split(symbol).join('')
            }, line)
        })
    }
}

const joinLines = (separator) => {
    return function(contentArray) {
        return contentArray.join(separator);
    }
}

const splitWords = contentArray => {
    return contentArray.split(' ');
}

function groupWords(words) {
    return Object.values(words.reduce((group, word) => {
        const newWord = word.toLowerCase();
        const qtde = group[newWord] ? group[newWord].qtde + 1 : 1;
        group[newWord] = {word: newWord, qtde};
        return group;
    }, {}))
}

function sortByAttr(attr, ordem = 'asc') {
    return function (array) {
        const desc = (object1, object2) => object2[attr] - object1[attr];
        const asc = (object1, object2) => object1[attr] - object2[attr];
        return [...array].sort(ordem === 'asc' ? asc : desc);
    }
}


module.exports = {
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
}
