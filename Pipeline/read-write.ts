// Office Script to Fetch, Load, and Write data into Excel (NOW OLD, DO NOT USE)

// Main function
async function main(workbook: ExcelScript.Workbook) {
    let sheet = workbook.getActiveWorksheet();

    var requestOptions: RequestInit = {
        method: 'POST',
        redirect: 'follow' as RequestRedirect, // Cast the string to RequestRedirect enum type
    };

    try {
        const response = await fetch("add dev link", requestOptions);

        let json: MainData = await response.json(); // convert reponse to JSON
        type MainData = Object[]; // make map method available

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

    } catch (error) {
        console.log('Error:', error);
    }
}

/**
 * Interface for API response data
 */
interface MainData {
    sNo: number;
    leaseNo: string;
    sequence: string;
    homePhone: string | null;
    cellPhone: string | null;
    salesPerson: string;
    vendor: string;
    remainingTerm: number;
    frequency: string;
    sellingPrice: number;
    gapPremium: number;
    walkAwayPremium: number;
    sellingPriceWithSp: number;
    down: number;
    adminFeetPine: number;
    downRcd: number;
    finAmtWithSp: number;
    finAmtWithoutSp: number;
    gap: number;
    endOfTerm: number;
    applicableTaxes: number;
    fico: number;
    bni: number;
    creditRating: string;
    status1: string;
    status2: string;
    papDt: string;
    reserveRelease: number;
    contractType: string;
    walkAway: number;
    isIncomplete: boolean;
    id: string;
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