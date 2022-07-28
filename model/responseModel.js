const Sequelize = require('sequelize');

var { sequelize } = require('../config/dbConfig');

var testResponseCode = sequelize.define('testing_tables', {
    rsp_code: {
        type: Sequelize.STRING(15),
        allowNull: true,
        primaryKey: true
    },
    rsp_msg: {
        type: Sequelize.STRING(15),
        allowNull: true,
        primaryKey: false
    }
}, {
    freezTableName: true,
    timeStamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = {
    getResponses: async (req) => {
        try {
            const res = testResponseCode.findAll();
            if (res) {
                return res;
            } else {
                throw new Error('Data process failed');
            }
        } catch (error) {
            throw error
        }   
    }
}