'use strict';

exports.handler = (event, context, callback) => {
    var AWS = require("aws-sdk");
    console.log("1");
    AWS.config.update({
    region: "eu-west-1"
    });
    console.log("2");
    var dynamodb = new AWS.DynamoDB();
    console.log("3");
    var table = "Movies";
    console.log("4");
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
    console.log("5");
    dynamodb.putItem(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
    console.log("6");
    callback(null, {"statusCode": 200, "body": "Success Again"});
};