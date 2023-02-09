const axios = require('axios')
const fs = require('fs')
//import { Octokit } from "octokit";

async function getScoreCard(url:string) {
    var api_url = new String("https://api.securityscorecards.dev/projects/");
    var repo_url = new String(url);
    var repo_url_len = repo_url.length
    var sliced_repo_url = repo_url.slice(8, repo_url_len);
    var api_repo = api_url.concat(sliced_repo_url.toString());
    const options = {
        method : 'GET',
        url: api_repo,
        params: { category: 'all', count: 2},
    };

    var jsonfile_name = './Scorecard.json'
    await axios
        .request(options)
        .then(function (response:any) {
            const jsonString = JSON.stringify(response.data, null, 2)
            fs.writeFileSync(jsonfile_name, jsonString, {
                flag: 'w'
            })
        })
        .catch(function (error:any) {
            console.error(error);
        });
    return jsonfile_name
}

//const octokit = net Octokit({
//    auth: ,
//});
//await octokit.request("Get /octocat", {});

//console.log(getScoreCard("https://github.com/cloudinary/cloudinary_npm"));
//console.log(getScoreCard("https://github.com/lodash/lodash"));
//console.log(getScoreCard("https://github.com/nullivex/nodist"));

function getBusFactor() {
    const bf_subscore = 5
    return bf_subscore
}

function getLicense() {
    const li_subscore = 3
    return li_subscore
}

function getRampUp() {
    const ramp_subscore = 6
    return ramp_subscore
}

function getResponsive() {
    const resp_subscore = 4
    return resp_subscore
}

module.exports = { getScoreCard, getBusFactor, getLicense,  getRampUp, getResponsive };
