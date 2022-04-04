const elasticClient = require("./elasticClient")
const createIndex = async function (indexName){
    try{
        return await elasticClient.indices.get({
            index: indexName
        })
    }
    catch(e){
        return await elasticClient.indices.create({
            index : indexName
        })
    }
}

module.exports = createIndex