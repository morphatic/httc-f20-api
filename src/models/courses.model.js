// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const courses = sequelizeClient.define('courses', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM('Introductory', 'Intermediate', 'Advanced'),
      allowNull: false,
      defaultValue: 'Introductory',
    },
  }, {
    hooks: {
      beforeCount (options) {
        options.raw = true
      },
    },
  })

  // eslint-disable-next-line no-unused-vars
  courses.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    courses.belongsToMany(models.subjects, { through: 'courses_subjects' })
    courses.belongsToMany(models.students, { through: 'courses_students' })
  }

  return courses
}
