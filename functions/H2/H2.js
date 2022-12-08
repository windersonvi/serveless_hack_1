const output = require('../../utils/output/output')

const handler = async(event) =>{
    let {httpMethod:method} = event
    if(method == 'POST'){
        return output({'content':'POST'})
    }


}

module.exports = {handler}