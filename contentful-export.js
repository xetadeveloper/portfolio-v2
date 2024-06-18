/**
 * This is a script to execute contentful CLI command to export contentful JSON.
 *
 * It is needed because there is no way to get the env variables from .env file into the package.json script
 * and we can't expose them to the public
 *
 * Original script: "contentful space export --config contentful/export-config.json --management-token $CONTENTFUL_ACCESS_TOKEN --space-id $CONTENTFUL_SPACE_ID"
 */

require('dotenv').config();
const spawn = require('cross-spawn');

if (!process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN)
    throw new Error('CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN Not Found in Environment');

if (!process.env.CONTENTFUL_SPACE_ID)
    throw new Error('CONTENTFUL_SPACE_ID Not Found in Environment');

const args = [
    'space',
    'export',
    '--config',
    'src/contentful/export-config.json',
    '--management-token',
    process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
    '--space-id',
    process.env.CONTENTFUL_SPACE_ID,
];

const child = spawn('contentful', args, { stdio: 'inherit' });

child.on('exit', function (code, signal) {
    console.log('Process exited with code', code);
});
