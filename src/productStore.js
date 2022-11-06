
const productsArray = [
    {
        id: "1",
        title: "Tea",
        price: 4.99
    },
    {
        id: "2",
        title: "Coffee",
        price: 9.99
    },
    {
        id: "3",
        title: "Hot Chocolate",
        price: 39.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product Data Does Not Exist For The ID: " + id);
        return undefined;
    }

    return productData;
} 

export { productsArray, getProductData };