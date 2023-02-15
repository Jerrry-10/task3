import products from "./products"

const ArrayFilter = () => {

    return <div>
        <p> These products are on sale!!!</p>
        {
            products.filter( item => item.onSale != false).map(({id, name, price}) => <li key={id}>The {name} costs ${price}</li>) 
        }
    </div>
}

export default ArrayFilter;