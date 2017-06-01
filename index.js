'use strict';

exports.handler = (event, context, callback) => {
    var AWS = require("aws-sdk");

    AWS.config.update({
    region: "eu-west-1"
    });

    var docClient = new AWS.DynamoDB.DocumentClient();

    var table = "Movies";

    var year = 2015;
    var title = "The Big New Movie";

    var params = {
        TableName:table,
        Item:{
            "year": year,
            "title": title,
            "info":{
                "plot": "Nothing happens at all.",
                "rating": 0
            }
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });

    callback(null, {"statusCode": 200, "body": "Success Again"});
};