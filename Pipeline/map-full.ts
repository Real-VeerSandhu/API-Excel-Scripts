// merge fetched object and full data object

interface FullData1 {
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
  }
function trObject(input: FullData1): FullData1 {
    const transformedObject: FullData1 = {
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
const jsonOut: FullData1 = {
    id: 'twelve',
    sNo: 234,
    leaseNo: 'dsfeef',
    sequence: 'sdfi4',
    applicant: 'monkey',
    maintainedBy: 'me'
};

console.log(trObject(jsonOut));

