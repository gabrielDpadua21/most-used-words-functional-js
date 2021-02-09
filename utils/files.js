const fs = require('fs');
const Path = require('path');


function readDirectory(path) {
    return new Promise((resolve, reject) => {
        try {
            let files = fs.readdirSync(path);
            files = files.map(file => Path.join(path, file));
            resolve(files);
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

module.exports = {
    readDirectory,
    readFiles
}