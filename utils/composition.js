function composition(...fns) {
    return function(value) {
        return fns.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc) {
                return fn( await acc);
            }

            return fn(acc);
        }, value);
    }
}

module.exports = composition;