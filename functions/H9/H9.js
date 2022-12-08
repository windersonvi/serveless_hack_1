const output = require('../../utils/output/output')

const handler = async(event)=>{
    let {
        httpMethod:method,
        queryStringParameters: p,
    } = event
    let {playload} = p
    const LISTA = ["foo","bar","baz","qux","fred"]
    
    function busqueda (users){
        return users == playload
    }

    let buscador = LISTA.find(busqueda)

    if( method== 'GET' && buscador) {
        return output(p)
    }else{
        return output("NOT FOUND")
    }

}

module.exports = {handler}