const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubusercontent.com/u/133562136?s=400&u=5e9f278f9a0f1d54fdcc9b019e01f41a79d16bbb&v=4",
};
