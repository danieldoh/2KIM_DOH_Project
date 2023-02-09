"use strict";
const score = require('./Scorecard.json');
var checks = score.checks;
console.log(checks);
var index = checks.findIndex(obj => obj.name == "CI-Test");
console.log(index);
var cnt = 3;
cnt -= 1;
console.log(cnt);
const data;
//# sourceMappingURL=read_json.js.map