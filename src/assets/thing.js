const fs = require('fs');
const path = require('path');
const https = require('https');

const downloadDir = path.join(__dirname, 'state-flags');
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir);
}

// List of US states with their Wikipedia page titles
const states = [
    'Flag of Alabama',
    'Flag of Alaska',
    'Flag of Arizona',
    'Flag of Arkansas',
    'Flag of California',
    'Flag of Colorado',
    'Flag of Connecticut',
    'Flag of Delaware',
    'Flag of Florida',
    'Flag of Georgia (U.S. state)',
    'Flag of Hawaii',
    'Flag of Idaho',
    'Flag of Illinois',
    'Flag of Indiana',
    'Flag of Iowa',
    'Flag of Kansas',
    'Flag of Kentucky',
    'Flag of Louisiana',
    'Flag of Maine',
    'Flag of Maryland',
    'Flag of Massachusetts',
    'Flag of Michigan',
    'Flag of Minnesota',
    'Flag of Mississippi',
    'Flag of Missouri',
    'Flag of Montana',
    'Flag of Nebraska',
    'Flag of Nevada',
    'Flag of New Hampshire',
    'Flag of New Jersey',
    'Flag of New Mexico',
    'Flag of New York',
    'Flag of North Carolina',
    'Flag of North Dakota',
    'Flag of Ohio',
    'Flag of Oklahoma',
    'Flag of Oregon',
    'Flag of Pennsylvania',
    'Flag of Rhode Island',
    'Flag of South Carolina',
    'Flag of South Dakota',
    'Flag of Tennessee',
    'Flag of Texas',
    'Flag of Utah',
    'Flag of Vermont',
    'Flag of Virginia',
    'Flag of Washington (state)',
    'Flag of West Virginia',
    'Flag of Wisconsin',
    'Flag of Wyoming'
];

async function fetchImageUrl(title) {
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1000`;
    
    return new Promise((resolve, reject) => {
        https.get(apiUrl, (response) => {
            let data = '';
            
            response.on('data', (chunk) => {
                data += chunk;
            });
            
            response.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    const pages = result.query.pages;
                    const pageId = Object.keys(pages)[0];
                    const thumbnail = pages[pageId].thumbnail;
                    
                    if (thumbnail && thumbnail.source) {
                        resolve(thumbnail.source);
                    } else {
                        reject(new Error(`No image found for ${title}`));
                    }
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', reject);
    });
}

function downloadImage(url, stateName) {
    return new Promise((resolve, reject) => {
        const fileName = path.join(downloadDir, `${stateName}.jpg`);
        const file = fs.createWriteStream(fileName);

        https.get(url, response => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${stateName}: ${response.statusCode}`));
                return;
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close();
                console.log(`Successfully downloaded ${stateName} flag`);
                resolve();
            });
        }).on('error', error => {
            fs.unlink(fileName, () => {});
            reject(error);
        });

        file.on('error', error => {
            fs.unlink(fileName, () => {});
            reject(error);
        });
    });
}

async function downloadAllFlags() {
    for (const stateTitle of states) {
        try {
            const stateName = stateTitle.replace('Flag of ', '').replace(' (U.S. state)', '').replace(' (state)', '');
            console.log(`Fetching image URL for ${stateName}...`);
            const imageUrl = await fetchImageUrl(stateTitle);
            await downloadImage(imageUrl, stateName);
        } catch (error) {
            console.error(`Error processing ${stateTitle}:`, error.message);
        }
        // Add a small delay between requests to be nice to Wikipedia's servers
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Start the download process
console.log('Starting flag downloads...');
downloadAllFlags()
    .then(() => console.log('All downloads completed!'))
    .catch(error => console.error('Error during download process:', error));
