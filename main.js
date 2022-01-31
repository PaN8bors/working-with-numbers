import input from 'input';

async function main() {
    const one = await input.text('Enter a number');
    const two = await input.text("Enter another number");
    const numOne = Number(one);
    const numTwo = Number(two);
    
    console.log(`${numOne} + ${numTwo} = ${numOne + numTwo}`);
    console.log(`${numOne} - ${numTwo} = ${numOne - numTwo}`);
    console.log(`${numOne} * ${numTwo} = ${numOne * numTwo}`);
    console.log(`${numOne} / ${numTwo} = ${numOne / numTwo}`);
    console.log(`${numOne} % ${numTwo} = ${numOne % numTwo}`);
    console.log(`${numOne} ** ${numTwo} = ${numOne ** numTwo}`);



}

main();