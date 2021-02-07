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

module.exports = {
    filterFiles
}