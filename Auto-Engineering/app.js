function automotiveManufacturer(arr) {

    let record = new Map();

    for (let obj of arr) {
        let [carManufacturer, carModel, carCount] = obj.split(' | ');

        carCount = Number(carCount);

        if (!record.has(carManufacturer)) {
            record.set(carManufacturer, new Map()); 

        }

        if (!record.get(carManufacturer).has(carModel)) {
            record.get(carManufacturer).set(carModel, 0);
        }

        let oldCount = record.get(carManufacturer).get(carModel);


        record.get(carManufacturer).set(carModel, carCount + oldCount);

        
    }

    for (let [carManufac,carModel] of record) {
        console.log(carManufac);

        for (let [model, count] of carModel) {
            console.log(`###${model} -> ${count}`);

            
        }
    }


}

automotiveManufacturer([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])