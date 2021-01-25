if (process.env.NODE_ENV === 'production') {
    module.exports = require('./ReactDOM-prod.js');
} else {
    module.exports = require('./ReactDOM-dev.js');
}
