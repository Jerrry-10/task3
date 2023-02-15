import products from "./products";

const ArrayReduce = () => {

    const totalCost = products.reduce((accumulator, products) => {
        return accumulator + products.price;
    }, 0);

    const productNames = products.reduce((accumulator, items, i, products) => {
        return `
            ${accumulator}
            ${i === 0 ? '' : ', '}
            ${i === products.length - 1 ? 'and ' : ''}
            ${items.name}`;
    }, '');


    return  <div>
                <p className="text-center">The total costs of the products is ${totalCost} dollars.</p>
                <p className="text-center">The products are {productNames}</p>
            </div>
}

export default ArrayReduce;