"use strict";
exports.__esModule = true;
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
console.log(myCricketCoach.getDailyWorkOut());
console.log(myCricketCoach.getDailyFortune());
var myGolfCoach = new GolfCoach_1.GolfCoach();
console.log(myGolfCoach.getDailyWorkOut());
