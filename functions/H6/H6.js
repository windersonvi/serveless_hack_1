const output = require('../../utils/output/output')

const handler = async(event) => {
    let {httpMethod:method} = event
    
    switch(method){
        case 'GET':
            return output({"method":"GET", "content":"GET"})
            break
        
        case 'POST':
            return output({"method":"POST", "content":"POST"})
            break
        
        case 'PUT':
            return output({"method":"PUT", "content":"PUT"})
            break
        
        case 'DELETE':
            return output({"method":"DELETE", "content":"DELETE"})
            break
        
        default:
            return output({})
    }
}

module.exports = {handler}