const { Client } = require('discord.js-selfbot-v13');
const fs = require('fs');

const client = new Client();
const channelId = process.env.CHANNEL_ID; 
const dataFile = 'date.json'; // DONT TOUCH THIS FILE 

let timeLeft = 0;
let intervalId;

function getRandomDelay() {
    return Math.floor(Math.random() * (30 - 15 + 1) + 15) * 60 * 1000;
}

function saveTimeLeft() {
    fs.writeFileSync(dataFile, JSON.stringify({ timeLeft, timestamp: Date.now() }, null, 2));
}

function loadTimeLeft() {
    if (fs.existsSync(dataFile)) {
        const data = JSON.parse(fs.readFileSync(dataFile));
        const elapsed = Date.now() - data.timestamp;
        const remaining = data.timeLeft - elapsed;
        return remaining > 0 ? remaining : 0;
    }
    return 0;
}
// main func
async function bump() {
    const channel = await client.channels.fetch(channelId);
    if (channel) {
        channel.sendSlash('302050872383242240', 'bump');
        console.log(`[${new Date().toLocaleTimeString()}] /bump exécuté`);
    } else {
        console.log('Impossible de trouver le canal.');
    }

    timeLeft = 2 * 60 * 60 * 1000 + getRandomDelay(); // 2h + random

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    console.log(`Prochain bump dans ${hours}h ${minutes}m ${seconds}s`);

    clearInterval(intervalId);
    intervalId = setInterval(() => {
        timeLeft -= 1000;
        if (timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(intervalId);
        }
        saveTimeLeft();
    }, 1000);

    setTimeout(bump, timeLeft);
}

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}`);

    timeLeft = loadTimeLeft();
    if (timeLeft > 0) {
        console.log(`Reprise du timer: bump dans ${Math.floor(timeLeft / 1000)}s`); // flemme de mettre sous le format h/m/s 
        intervalId = setInterval(() => {
            timeLeft -= 1000;
            if (timeLeft <= 0) {
                timeLeft = 0;
                clearInterval(intervalId);
            }
            saveTimeLeft();
        }, 1000);

        setTimeout(bump, timeLeft);
    } else {
        bump();
    }
});

client.login(process.env.TOKEN); 
