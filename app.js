function add(num1, num2){
    return num1+num2;
}

console.log(add(5,6));

function addImpure(num1, num2){
    return num1+num2+Math.random();
}

console.log(addImpure(5,6));

const _arr = ['Item 1','Item 2'];

function impureSideEffect(ary){
    ary.push('New Item');
    console.log(ary);
}
console.log(impureSideEffect(_arr));

function createTaxCalculator(tax){
    function calculateTax(amount){
        return amount*tax;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(200));
console.log(calculateIncomeTaxAmount(100));