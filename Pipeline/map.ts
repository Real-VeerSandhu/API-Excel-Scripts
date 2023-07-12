interface FullData {
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
  
function createNullObject<T>(keys: (keyof T)[]): T {
const nullObject: Partial<T> = {};
keys.forEach((key) => {
    nullObject[key] = null;
});
return nullObject as T;
}

const fullDataKeys = Object.keys({} as FullData);
const nullData: FullData = createNullObject<FullData>(fullDataKeys as (keyof FullData)[]);
  
  

const webInput: FullData = {
    id: 'jasdhflr',
    endOfTerm: 23,
    walkAway: 25,
    mileageAllowance: 455,
    creditRating: 'yes'
    // ...
};

// Default object with all keys set to undefined
const defaultObject: FullData = Object.keys(webInput).reduce((obj, key) => {
    obj[key] = undefined;
    return obj;
  }, {});
  
// Merge the webInput with the defaultObject
const mergedInput = { ...defaultObject, ...webInput };

console.log(defaultObject);