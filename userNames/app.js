function userNames(arr) {
    let record = new Set();

    for (let username of arr) {

        record.add(username);
    }


    record = [...record].sort(sortByLength);

    record.forEach(u => console.log(u));

    function sortByLength(a, b) {

        if (a.length < b.length) { return -1 }
        if (a.length > b.length) { return 1 }
        if (a < b) { return -1 }
        if (a > b) { return 1 }

    }
}









userNames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);