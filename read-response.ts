import * as fs from 'fs';

const path: string = 'Data/response-sample.json'

// Read JSON file
const jsonString: string = fs.readFileSync(path, 'utf8');

// Parse JSON string to an object
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);