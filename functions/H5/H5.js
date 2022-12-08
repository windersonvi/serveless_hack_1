const output = require('../../utils/output/output')

const handler = async(event) => {
    let {httpMethod:method} = event
    if(method == 'GET'){
        return output({"content":"delete"})
    }else{
        return output({})
    }


}

module.exports = {handler}