'use strict';

let intervalId;

let startCount = () => {
    let count = 1000;
    intervalId = setInterval(() => console.log(count++), 400);
}

let stopCount = () => clearInterval(intervalId);

module.exports = {
    startCount, stopCount
};