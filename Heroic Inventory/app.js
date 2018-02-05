function heroInventroy(arr) {
    let heroData = [];

    for (let heroInfo of arr) {

        let heroStats = heroInfo.split(' / ');

        let heroName = heroStats[0];
        let heroLevel = Number(heroStats[1]);
        let heroItems = [];

        if (heroStats.length > 2) {

            heroItems = heroStats[2].split(", ");
        }

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        }

        heroData.push(hero);


    }
    console.log(JSON.stringify(heroData));

}

heroInventroy([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])