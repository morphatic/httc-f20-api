const subjects = require('./subjects/subjects.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(subjects)
}
