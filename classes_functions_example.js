class Payment {
    constructor (paymentId, paymentType) {
        this.paymentId = paymentId;
        this.paymentType = paymentType;
    }

    get PType () {
        return this.paymentType        
    }

    set PType (type) {
        this.paymentType = type;
    }

}


class Purchase extends Payment {
    constructor (paymentId, paymentType, purchaseId) {
        super (paymentId, paymentType);
        this.purchaseId = purchaseId;
    }
}

// Payment Class Instance
const newPType = new Payment();

newPType.PType= "crypto";

console.log("Payment Type Getter", newPType.PType);

// Purchase Class Instance shows Inheritance

const newPurchase = new Purchase;

newPurchase.PType = "paypal";

console.log("Payment Type Getter", newPurchase.PType);



// Payment Validation function

const validatePayment = (paymentTypeInput) => {
    return paymentTypeInput === newPType.PType ? "Valid Payment" : "Invalid Payment";
}

console.log(validatePayment("crypto")); // Valid Payment

console.log(validatePayment("paypal")); // Invalid Payment
