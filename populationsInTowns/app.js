function populationsInTown(arr) {

    let list = new Map();

    for (let obj of arr) {
        let [town, population] = obj.split(' <-> ');

        if (!list.has(town)) {
            list.set(town, 0);

        }

        list.set(town, list.get(town) + Number(population));
    }

    for (let [town,pop] of list) {
        console.log(`${town} : ${pop}`);
    }

}


populationsInTown([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])