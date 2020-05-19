var idcard={};
module['exports'] = idcard;
idcard.name = require("./name");
idcard.emid = require("./emid");
idcard.jobrole = require("./jobrole");
idcard.company = require("./company");

function random_item(item)
{

return item[Math.floor(Math.random()*item.length)];

}


console.log("-------RANDOM EMPLOYEE ID-CARD-------------: ");
console.log("EmployeeID is: " + random_item(idcard.emid));
console.log("Name: " + random_item(idcard.name));
console.log("Role: " + random_item(idcard.jobrole));
console.log("Company Name: " + random_item(idcard.company));

