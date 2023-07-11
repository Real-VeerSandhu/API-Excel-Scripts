// Office Script to convert JSON to tabular data

async function main(workbook: ExcelScript.Workbook): Promise <void> {
    // Get the active worksheet.
    let sheet = workbook.getActiveWorksheet();

    // sample API
    let fetchResult = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')

    // Convert the returned data to the expected JSON structure.
    let json: JSONData = await fetchResult.json();
    type JSONData = Object[]; // make map method available

    console.log(JSON.stringify(json));

    // Display the current worksheet's name.
    console.log(sheet.getName());

    // JSON --> TABLE

    // Determine the data's shape by getting the properties in one object.
    // This assumes all the JSON objects have the same properties.
    const columnNames = getPropertiesFromJson(json[0]);

    // Create the table headers using the property names.
    const headerRange = sheet.getRangeByIndexes(0, 0, 1, columnNames.length);
    headerRange.setValues([columnNames]);

    // Create a new table with the headers.
    const newTable = sheet.addTable(headerRange, true);

    // Add each object in the array of JSON objects to the table.
    const tableValues = json.map(row => convertJsonToRow(row));
    newTable.addRows(-1, tableValues);
}

interface JSONData {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}



/**
 * Turns a JSON object into an array to be used as a table row.
 */
function convertJsonToRow(obj: object) {
    const array: (string | number)[] = [];

    // Loop over each property and get the value. Their order will be the same as the column headers.
    for (let value in obj) {
        array.push(obj[value]);
    }
    return array;
}

/**
 * Gets the property names from a single JSON object.
 */
function getPropertiesFromJson(obj: object) {
    const propertyArray: string[] = [];

    // Loop over each property in the object and store the property name in an array.
    for (let property in obj) {
        propertyArray.push(property);
    }

    return propertyArray;
}