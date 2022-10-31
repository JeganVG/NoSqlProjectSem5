const { MongoClient } = require('mongodb');

agg1 = async (req,res) => {
    const { MongoClient } = require('mongodb');
    console.log('hello');
    const uri = "mongodb://localhost:27017//nosqlproject";

    const client = new MongoClient(uri);
        client.connect();
        console.log('connected');

    const pipeline = [{
        '$project': {
            'Total_Likes':1,
            'Youtuber_Name':1
        }
    }];
    lis=[]
    const aggCursor = client.db("nosqlproject").collection("Youtubers").aggregate(pipeline);
    await aggCursor.forEach(ele =>{
        lis.push(ele);
    })
    return res.status(200).send({data:lis});
}

agg2 = async (req,res) => {
    const { MongoClient } = require('mongodb');
    console.log('hello');
    const uri = "mongodb://localhost:27017//nosqlproject";

    const client = new MongoClient(uri);
        client.connect();
        console.log('connected');

    const pipeline = [{
        '$project': {
            'Genre':1,
            'Total_Likes':1
        }},{
        '$group':{
            _id:'$Genre',
            Total_Likes:{$sum:'$Total_Likes'}
        }
    }];
    lis=[]
    const aggCursor = client.db("nosqlproject").collection("Videos").aggregate(pipeline);
    await aggCursor.forEach(ele =>{
        lis.push(ele);
    })
    return res.status(200).send({data:lis});
}
module.exports={
    agg1,
    agg2
}