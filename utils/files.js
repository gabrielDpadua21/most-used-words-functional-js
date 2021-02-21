const fs = require('fs');
const Path = require('path');


function readDirectory(path) {
    return new Promise((resolve, reject) => {
        try {
            const files = fs.readdirSync(path);
            const completFiles = files.map(file => Path.join(path, file));
            resolve(completFiles);
        } catch (err) {
            reject(err);
        }
    })
}

function readFile(path) {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(path, {encoding: 'utf-8'});
            resolve(content.toString());
        } catch(err) {
            reject(err);
        }
    });
}

function readFiles(paths) {
    return Promise.all(paths.map(path => readFile(path)));
}

function writeFile(path) {
    return function(content) {
        return new Promise((resolve, reject) => {
            try {
    
                content.map(line => {
                    fs.appendFileSync(path, line.word + ',' +line.qtde + '\n');
                })
    
                resolve(content)
    
            } catch(err) {
                reject(err);
            }
        })
    }
}

module.exports = {
    readDirectory,
    readFiles,
    writeFile
}