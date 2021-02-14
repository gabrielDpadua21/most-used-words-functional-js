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
            let newLine = line;
            symbols.forEach(symbol => {
                newLine = newLine.replace(symbol, '');
            })

            return newLine;
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

module.exports = {
    filterFiles,
    splitJoinContent,
    removeEmptyLine,
    removeTimeLines,
    removeNumbers,
    replaceCaracter,
    splitWords,
    joinLines
}
