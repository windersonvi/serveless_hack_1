const output = require('../../utils/output/output')
  
const handler = async (event) => {
  
    let {httpMethod:method} = event
    if(method== 'GET'){
      return output({ "content": "get"})
    }

}

module.exports = { handler }