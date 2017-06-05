'use strict';

exports.handler = (event, context, callback) => {
    var AWS = require("aws-sdk");

    AWS.config.update({
        endpoint: "https://dynamodb.eu-west-1.amazonaws.com",    
        region: "eu-west-1"
    });

    var dynamodb = new AWS.DynamoDB();
    var table = "UserInfo";
    var year = "2015";
    var title = "The Big New Movie";
    var userID = event.body.userID;
    var goal = event.body.goal;

    var params = {
        TableName:table,
        Item:{
            "userID": 
                {"S" : userID},
            "goal":
                {"S" : goal}
            }
        
    };

    dynamodb.putItem(params, function(err, data) {
        if (err) {
            console.log("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            callback(null, {"statusCode": 500, "body": "Failed"});
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
            callback(null, {"statusCode": 200, "body": "Success"});
        }
    });
};