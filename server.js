'use strict';

require('babel-core/register')({
    only: /lib|portable/,
    extensions: ['.js']
});

require('./server/app');