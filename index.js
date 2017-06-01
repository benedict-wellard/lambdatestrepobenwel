'use strict';

exports.handler = (event, context, callback) => {
    var AWS = require("aws-sdk");
    console.log("1");
    AWS.config.update({
    endpoint: "https://dynamodb.eu-west-1.amazonaws.com",    
    region: "eu-west-1"
    });
    console.log("2");
    var dynamodb = new AWS.DynamoDB();
    console.log("3");
    var table = "Movies";
    console.log("4");
    var year = "2015";
    var title = "The Big New Movie";

    var params = {
        TableName:table,
        Item:{
            "year": 
                {"S" : year},
            "title":
                {"S" : title},
            "info":
                {"S" : "Nothing happens at all."}
            }
        
    };
    console.log("5");
    dynamodb.putItem(params, function(err, data) {
        if (err) {
            console.log("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
    console.log("6");
    callback(null, {"statusCode": 200, "body": "Success Again"});
};