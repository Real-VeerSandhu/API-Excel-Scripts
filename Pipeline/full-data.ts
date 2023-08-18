interface FullDataPlain {
    id : string
    sNo: number;
    leaseNo: string;
    sequence: string;
    applicant: string;
    operatingName: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    province: string;
    postal: string;
    homePhone: string;
    businessPhone: string;
    cellPhone: string;
    salesPerson: string;
    year: number;
    make: string;
    model: string;
    vin: string;
    vendor: string;
    vinLastSix: string;
    term: number;
    remainingTerm: number;
    remainingTermCalculated: number;
    lastPaymentDt: Date;
    lastPaymentDtCalculated: Date;
    frequency: string; // Frequency
    approvedOn: Date;
    firstPaymentDt: Date;
    sellingPrice: number;
    gapPremium: number;
    walkAwayPremium: number;
    sellingPriceWithSp: number;
    down: number;
    adminFeetPine: number;
    downRcd: number;
    finAmtWithSp: number;
    finAmtWithoutSp: number;
    rental: number;
    gap: number;
    pymtBfrTax: number;
    endOfTerm: number;
    applicableTaxes: number;
    taxAmt: number;
    totalPayment: number
    fico: number;
    bni: number;
    creditRating: string; // CreditRating
    status1: string;
    status2: string;
    amtRecd: number;
    papDt: string;
    leaseAssociate: string;
    reserveRelease: number;
    contractType: string; // ContractType
    walkAway: number;
    fundedOn: Date;
    tranche: string;
    dmfReserve: number;
    reserveBal: number;
    releaseDate: Date;
    misc: string;
    mileageAllowance: number;
    maintainedBy: string; // MaintainedBy
    partOfMultipleUnits: string
} 