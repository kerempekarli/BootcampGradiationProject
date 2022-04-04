const es = require('elasticSearch');
const fs = require('fs')

const esClient = new es.Client({
    node: 'https://localhost:9200/',
  auth: {
    username: "kerempekarli",
    password:  "123456",
  },
  caFingerprint: 'fb8260a7fe84ecc667e29f6d39e8bb7358369670b4e04db1bc20a08d9579183a',
  tls: {
    // might be required if it's a self-signed certificate
    rejectUnauthorized: false
  }  
})

module.exports = esClient