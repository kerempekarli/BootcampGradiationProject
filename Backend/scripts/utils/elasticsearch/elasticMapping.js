const esClient = require("./elasticClient")
const addmappingToIndex = async function (indexName, mappingType,mapping){
    console.log(mapping)
    return await esClient.indices.putMapping({
        index: indexName,
        type: mappingType,
        body: mapping
    });
}

module.exports = addmappingToIndex;