const middy = require("middy")
const {jsonBodyParser} = require("middy/middlewares")
const output = require('../../utils/output/output')

const H10_Winderson = async(event) => {
    let 
    {
        httpMethod:method,
        body: b
    } = event

    let {playload} = b
    const LISTA = ["foo","bar","baz","qux","fred"]

    function busqueda (users){
        return users == playload
    }

    let buscador = LISTA.find(busqueda)

    
    if(method == 'GET' && buscador){
        return output(b)
    }

    else{
        return output("NOT FOUND")
    }


}

exports.handler = middy(H10_Winderson).use(jsonBodyParser())