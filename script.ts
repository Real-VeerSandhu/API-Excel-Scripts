// Office Script to convert JSON to tabular data

async function main(workbook: ExcelScript.Workbook): Promise <void> {
    // Get active worksheet.
    let sheet = workbook.getActiveWorksheet();

    // sample API
    let fetchResult = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')

    // Convert the returned data to the JSON structure.
    let json: JSONData = await fetchResult.json();
    type JSONData = Object[]; // make map method available

    console.log(JSON.stringify(json));

    // JSON --> TABLE

    const columnNames = getPropertiesFromJson(json[0]);

    const headerRange = sheet.getRangeByIndexes(0, 0, 1, columnNames.length);
    headerRange.setValues([columnNames]);

    const newTable = sheet.addTable(headerRange, true);

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

    for (let property in obj) {
        propertyArray.push(property);
    }
    return propertyArray;
}