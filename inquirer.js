var inquirer = require("inquirer");
var newAuction;
var newBid;
var exit;
var output = {newAuction, newBid, exit};

inquirer.prompt([
    {
        type: "list",
        name: "postBid",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID", "EXIT"]
    }
]).then(function(userToDO) {
    if (userToDO.postBid === "POST") {
        inquirer.prompt([
            {
                type: "inupt",
                name: "item",
                message: "What is the item you would like to submit?"
            },
            {
                type: "input",
                name: "category",
                message: "What category would you like to place your auction in?"
            },
            {
                type: "input",
                name: "startingBid",
                message: "What would you like your starting bid to be?"
            }
        ]).then(function(outputAuction) {
            newAuction = [outputAuction.item, outputAuction.category, outputAuction.startingBid] 
        });
    } else if (userToDO.postBid === "BID") {
        inquirer.prompt([
            {
                type: "input",
                name: "itemToBidOn",
                message: "What auction would you like to place a bid in?"
            },
            {
                type: "input",
                name: "userBid",
                message: "How much would you like to bid?"
            }
        ]).then(function(outputBid) {
            newBid = [outputBid.itemToBidOn, outputBid.userBid]
        });
    } else if (userToDO.postBid === "EXIT") {
        exit = true;
        console.log("Thanks for playing!")
    }
});

module.exports = output;