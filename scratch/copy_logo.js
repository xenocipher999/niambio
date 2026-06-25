const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\govin\\.gemini\\antigravity\\brain\\27be8611-819b-4567-bbb2-4a4139c10626\\precision_pulse_podcast_logo_1777467011072.png";
const dest = "d:\\Niambio\\niambio-website\\public\\ecosystem-podcast.png";

try {
    fs.copyFileSync(src, dest);
    console.log('File copied successfully');
} catch (err) {
    console.error('Error copying file:', err);
}
