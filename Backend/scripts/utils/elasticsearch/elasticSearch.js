
const elasticClient = require("./elasticClient")

const searchInElastic = async function(indexName, mappingType, searchQuery){
    return await elasticClient.search({
        index: indexName,
        type: mappingType,
        body: searchQuery
    })
}

module.exports = searchInElastic