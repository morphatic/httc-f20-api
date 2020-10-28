// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const students = sequelizeClient.define('students', {
    ssn: {
      type: DataTypes.STRING(9),
      allowNull: false,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    mi: {
      type: DataTypes.STRING(1),
    },
    address: {
      type: DataTypes.STRING(100),
    },
    city: {
      type: DataTypes.STRING(40),
    },
    state: {
      type: DataTypes.STRING(2),
    },
    zip: {
      type: DataTypes.STRING(5),
    },
    phone: {
      type: DataTypes.STRING(10),
    },
    gender: {
      type: DataTypes.STRING(20),
    },
    dob: {
      type: DataTypes.DATEONLY,
    },
  }, {
    hooks: {
      beforeCount (options) {
        options.raw = true
      },
    },
  })

  // eslint-disable-next-line no-unused-vars
  students.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    students.belongsToMany(models.courses, { through: 'courses_students' })
  }

  return students
}
