const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017//cinema";
    
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await aggregate(client);
        console.log('connected');
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function aggregate(client){
    const pipeline = [{
        '$project': {
            'name':1
    }}
    ];

    const aggCursor = client.db("cinema").collection("movies").aggregate(pipeline);
    await aggCursor.forEach(ele =>{
        console.log('hello');
        console.log(`${ ele.name }`);
    })
}