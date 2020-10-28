const subjects = require('./subjects/subjects.service.js')
const courses = require('./courses/courses.service.js')
const students = require('./students/students.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(subjects)
  app.configure(courses)
  app.configure(students)
}
