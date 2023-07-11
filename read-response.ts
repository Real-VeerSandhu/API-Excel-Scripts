import * as fs from 'fs';

const path: string = 'Data/response-sample.json'

// Read the JSON file
const jsonString = fs.readFileSync(path, 'utf8');

// Parse the JSON string to an object
const jsonObject = JSON.parse(jsonString);

// Use the converted object
console.log(jsonObject);