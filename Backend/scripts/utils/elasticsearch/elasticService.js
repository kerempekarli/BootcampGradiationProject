const elasticClient = require('./elasticClient')
const createIndex = require('./createIndex')

elasticClient.ping({
    requestTimeout: 1000
}, async function(error){
    if(error){
        console.log('Elasticsearch\'a erişilemiyor')  
    }
    else{
        console.log('Elasticsearch ayağa kalktı')
    }
    try{
        //Create Index
        const resp = await createIndex('ecommerce')
        console.log("Index:" + resp)

        const mapping ={
            properties:{
                product:{
                    type:"text"
                }
            }
        }


        //Create products map
        const resmap = await elasticMap('ecommerce','products',mapping)


    }
    catch(err){
        console.log(err)
    }
})