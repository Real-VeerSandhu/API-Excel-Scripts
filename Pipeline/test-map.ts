// same as working-map but without interface

function mergeObject(input: Object): Object {
    const transformedObject: Object = {
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
        partOfMultipleUnits: null
    };
    for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key)) {
        transformedObject[key] = input[key];
        }
    };
    return transformedObject;
}


// Example usage
const noInterInput: Object = {
    id: 'twelve',
    sNo: 234,
    leaseNo: 'dsfeef',
    sequence: 'sdfi4',
    applicant: 'monkey',
    maintainedBy: 'me'
};

console.log(mergeObject(noInterInput));

