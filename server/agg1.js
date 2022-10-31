const { MongoClient } = require('mongodb');

aggregate = async (req, res) => {
    const uri = "mongodb://localhost:27017//nosqlproject";
    console.log(res);
    
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await aggregate(client);
        console.log('connected');
    } finally {
        await client.close();
    }
    const pipeline = [{
        '$project': {
            'Channel_Name':1
    }}
    ];

    const aggCursor = client.db("nosqlproject").collection("Youtubers").aggregate(pipeline);
    await aggCursor.forEach(ele =>{
        console.log('hello');
        console.log(`${ ele.Channel_Name}`);
        return res.json({ success: true, data: ele})
    })
    
}

module.exports={
    aggregate
}
