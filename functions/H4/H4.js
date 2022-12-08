const output = require('../../utils/output/output')

const handler = async(event) =>{
    let {httpMethod:method} = event
    if(method == 'DELETE'){
        return output({'content':'DELETE'})
    }

}

module.exports = {handler}