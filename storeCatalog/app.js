function storeCatalog(arr) {

    let recordMap = new Map();

    for (let obj of arr) {

        let [productName, productPrice] = obj.split(' : ');


        let initalLetter = productName[0];

        if (!recordMap.has(initalLetter)) {

            recordMap.set(initalLetter, new Map());
            
        }

     
        let productsMap = recordMap.get(initalLetter);
        productsMap.set(productName, productPrice);
    }

    let sortedInitials = [...recordMap].sort(sortAlphabetac);

    for (let [initial,productMap] of sortedInitials) {
        console.log(initial);
        let sortedProducts = [...productMap].sort(sortAlphabetac);

        for (var [name,price] of sortedProducts) {
            console.log(`  ${name}: ${price}`);
        }
    }

    function sortAlphabetac(a, b) {

        return a[0].localeCompare(b[0]);

    }

   
}




storeCatalog([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti- Bug Spray : 15',
'T- Shirt : 10'
])