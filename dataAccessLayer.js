const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
// const mongoose = require('mongoose');
// const WaterFilter = require('./models/waterFilter');

const databaseName = 'water-filtration-db';
const collectionName = 'water-filters';

// mongoose.connect(process.env.ATLAS_CONNECTION, {useNewUrlParser : true, useUnifiedTopology : true})
// .then(console.log('successfully connected to database'))
// .catch(err => {console.log(err)})

const mongoDbUrl = process.env.ATLAS_CONNECTION;

const settings = {
    useUnifiedTopology: true
};

let database;

const Connect = function() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoDbUrl, settings, function(err, client) {
            if(err) {
                reject(err);
            }
            else {
                console.log('successfully connected to database');
                database = client.db(databaseName);
                resolve();
            }
        });
    });
};

const Find = function(product) {

    let productQuery = {};

    if(product) {
        productQuery = product;
    }

    return new Promise((resolve, reject) => {
        const productCollection = database.collection('water-filters');
        productCollection.find(productQuery).toArray(function(err, res) {
            if(err) {
                reject(err);
            }
            else {
                console.log('successfully found products');
                resolve(res);
            }
        });
    });
};

module.exports = { Connect, Find };