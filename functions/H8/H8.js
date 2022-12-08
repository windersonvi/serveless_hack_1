const middy = require("middy")
const {jsonBodyParser} = require("middy/middlewares")
const output = require('../../utils/output/output')

const H8_Winderson = async(event) => {
    let 
    {
        httpMethod:method,
        queryStringParameters:p,
        body: b
    } = event
    
    if(method == 'GET'){
        return output(b)
    }

    else{
        return output({})
    }


}

exports.handler = middy(H8_Winderson).use(jsonBodyParser())