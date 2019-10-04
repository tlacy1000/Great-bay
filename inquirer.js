var inquirer = require("inquirer");

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
            }
        ])
    } else if (userToDO.postBid === "BID") {
        inquirer.prompt([
            {
                type: "input",
                name: "itemToBidOn",
                message: "What auction would you like to place a bid in?"
            }
        ])
    }
})