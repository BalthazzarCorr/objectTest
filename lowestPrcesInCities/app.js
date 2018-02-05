function lowestPriceInCities(arr) {

    let products = new Map();

    for (let obj of arr) {

        let [town, product, productprice] = obj.split(' | ');


        if (!products.has(product)) {
            products.set(product, new Map());
        }

        products.get(product).set(town, Number(productprice)); 
    }

    for (let [product,towns] of products) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';

        for (let [town, productprice] of towns) {
            if (productprice < minPrice) {
                minPrice = productprice;

                minPriceTown = town;
            }

        }

        console.log(`${product} -> ${minPrice} (${minPriceTown}) `);
    }
}

lowestPriceInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);