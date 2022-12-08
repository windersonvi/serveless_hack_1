const output = require('../../utils/output/output')

const handler = async(event) => {
    let 
    {
        httpMethod:method,
        queryStringParameters:p
    } = event
    
    if(method == 'GET'){
        return output(p)
    }


}

module.exports = {handler}