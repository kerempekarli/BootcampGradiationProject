const esClient = require('./elasticDocument');

const insertProduct = async function(indexName,_id, mappingType, data){
    return await esClient.index({
        index:indexName,
        type:mappingType,
        id:_id,
        body:data
        
    })
}

module.exports = insertProduct