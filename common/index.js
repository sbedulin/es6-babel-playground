'use strict';

const ID_PREFIX = 'USER_';
function validateId(id) {
    return typeof id == 'string' && id.indexOf(ID_PREFIX) === 0;
}

function* fibonacci() {
    let n1 = 1;
    let n2 = 1;

    while (true) {
        let current = n2;
        n2 = n1;
        n1 += current;

        let reset = yield current;
        if(reset) {
            n1 = 1;
            n2 = 1;
        }
    }
}

module.exports = {
    validateId,
    fibonacci: fibonacci()
};