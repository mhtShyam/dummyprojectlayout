const testModel = require('../model/responseModel');
const sendRsp = require('../helpers/response').sendRsp;
const testController = {
    testControl: async (req, res) => {
        try {
            let result = await testModel.getResponses();
            if(result){
                return sendRsp(res, 200, 'Success', result);
            }
        } catch (error) {
            return sendRsp(res, 500, 'Internal Server Error', error.message)
        }
    }
}

module.exports = { testController }