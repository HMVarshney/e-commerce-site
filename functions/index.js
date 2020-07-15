const functions = require('firebase-functions');
var admin = require("firebase-admin");

var serviceAccount = require("./permission.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerce001.firebaseio.com"
});

const cors = require('cors');
const express = require('express');
const app = express();
const db = admin.firestore();

app.use(cors({origin:true}));


app.get('/api/test', (req,res)=>{
    return res.status(200).json({
        name:'Himank'
    })
});

app.get('/api/read', (req, res)=>{
    (async()=>{
        try{
            db.collection('products').get()
                .then((res)=>{
                    const data = res.docs.map((doc)=>{
                        return {...doc.data()}
                    });
                    return data;
                })
                .then((data)=>{
                    res.status(200).send(data)
                })
        }
        catch(error){
            console.log(error)
        }
    })();
})

exports.productData = functions.https.onRequest(app);