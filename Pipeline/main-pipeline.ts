// Main excel script

async function main(workbook: ExcelScript.Workbook) {
    let sheet = workbook.getActiveWorksheet();

    var requestOptions: RequestInit = {
        method: 'POST',
        redirect: 'follow' as RequestRedirect, // Cast the string to RequestRedirect enum type
    };


    try {
        // dev link works
        // const response = await fetch("https://us-central1-lloop-debug.cloudfunctions.net/gps/legacy-contract/get-all-legacy-contracts?token=cHJpZGVHcm91cEVudGVycHJpc2U=&timeStamp=2023-07-11T14:17:11.493Z", requestOptions);


      // production link (works on default timeStamp + 2023-07-01 + 2023-06-21)
      const response = await fetch("https://us-central1-lloop-21cf0.cloudfunctions.net/gps/legacy-contract/get-all-legacy-contracts?token=cHJpZGVHcm91cEVudGVycHJpc2UtcHJvZA==&timeStamp=2023-07-01T14:17:11.493Z", requestOptions);


        let json: MainData = await response.json(); // convert reponse to JSON

        let listData: Array<MainData> = [];
        // type MainData = Object[]; // make map method available

        for (let i in json) {
            listData.push(tObject(json[i]))
        }

        // test logs
        console.log('raw output:', JSON.stringify(json));
        console.log('array:', listData)
        console.log(sheet.getName());

        // JSON --> TABLE

        // Determine the data's shape by getting the properties in one object.
        // This assumes all the JSON objects have the same properties.
        const columnNames = getPropertiesFromJson(listData[0]);

        // Create the table headers using the property names.
        const headerRange = sheet.getRangeByIndexes(0, 0, 1, columnNames.length);
        headerRange.setValues([columnNames]);

        // Create a new table with the headers.
        const newTable = sheet.addTable(headerRange, true);

        // Add each object in the array of JSON objects to the table.
      const tableValues = listData.map(row => convertJsonToRow(row));
        newTable.addRows(-1, tableValues);

    } catch (error) {
        console.log('Error:', error);
    }
}


/**
 * Interface for API response data
 */
interface MainData {
    id?: string | null;
    sNo?: number | null;
    leaseNo?: string | null;
    sequence?: string | null;
    applicant?: string | null;
    operatingName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    address?: string | null;
    city?: string | null;
    province?: string | null;
    postal?: string | null;
    homePhone?: string | null;
    businessPhone?: string | null;
    cellPhone?: string | null;
    salesPerson?: string | null;
    year?: number | null;
    make?: string | null;
    model?: string | null;
    vin?: string | null;
    vendor?: string | null;
    vinLastSix?: string | null;
    term?: number | null;
    remainingTerm?: number | null;
    remainingTermCalculated?: number | null;
    lastPaymentDt?: Date | null;
    lastPaymentDtCalculated?: Date | null;
    frequency?: string | null; // Frequency
    approvedOn?: Date | null;
    firstPaymentDt?: Date | null;
    sellingPrice?: number | null;
    gapPremium?: number | null;
    walkAwayPremium?: number | null;
    sellingPriceWithSp?: number | null;
    down?: number | null;
    adminFeetPine?: number | null;
    downRcd?: number | null;
    finAmtWithSp?: number | null;
    finAmtWithoutSp?: number | null;
    rental?: number | null;
    gap?: number | null;
    pymtBfrTax?: number | null;
    endOfTerm?: number | null;
    applicableTaxes?: number | null;
    taxAmt?: number | null;
    totalPayment?: number | null;
    fico?: number | null;
    bni?: number | null;
    creditRating?: string | null; // CreditRating
    status1?: string | null;
    status2?: string | null;
    amtRecd?: number | null;
    papDt?: string | null;
    leaseAssociate?: string | null;
    reserveRelease?: number | null;
    contractType?: string | null; // ContractType
    walkAway?: number | null;
    fundedOn?: Date | null;
    tranche?: string | null;
    dmfReserve?: number | null;
    reserveBal?: number | null;
    releaseDate?: Date | null;
    misc?: string | null;
    mileageAllowance?: number | null;
    maintainedBy?: string | null; // MaintainedBy
    partOfMultipleUnits?: string | null;
    isIncomplete: boolean | null; // ADDED AFTER
    isObsolete: boolean | null; // ADDED AFTER
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


/**
 * Transforms fetched JSON into MainData type
 */
function tObject(input: MainData): MainData {
    const transformedObject: MainData = {
        id: null,
        sNo: null,
        leaseNo: null,
        sequence: null,
        applicant: null,
        operatingName: null,
        firstName: null,
        lastName: null,
        address: null,
        city: null,
        province: null,
        postal: null,
        homePhone: null,
        businessPhone: null,
        cellPhone: null,
        salesPerson: null,
        year: null,
        make: null,
        model: null,
        vin: null,
        vendor: null,
        vinLastSix: null,
        term: null,
        remainingTerm: null,
        remainingTermCalculated: null,
        lastPaymentDt: null,
        lastPaymentDtCalculated: null,
        frequency: null,
        approvedOn: null,
        firstPaymentDt: null,
        sellingPrice: null,
        gapPremium: null,
        walkAwayPremium: null,
        sellingPriceWithSp: null,
        down: null,
        adminFeetPine: null,
        downRcd: null,
        finAmtWithSp: null,
        finAmtWithoutSp: null,
        rental: null,
        gap: null,
        pymtBfrTax: null,
        endOfTerm: null,
        applicableTaxes: null,
        taxAmt: null,
        totalPayment: null,
        fico: null,
        bni: null,
        creditRating: null,
        status1: null,
        status2: null,
        amtRecd: null,
        papDt: null,
        leaseAssociate: null,
        reserveRelease: null,
        contractType: null,
        walkAway: null,
        fundedOn: null,
        tranche: null,
        dmfReserve: null,
        reserveBal: null,
        releaseDate: null,
        misc: null,
        mileageAllowance: null,
        maintainedBy: null,
        partOfMultipleUnits: null,
        isIncomplete:  null, // ADDED AFTER
        isObsolete: null, // ADDED AFTER
    };
    for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key)) {
            transformedObject[key] = input[key];
        }
    };
    return transformedObject;
}