function extractUniqWords(arr) {

    let result = new Set();

    for (let obj of arr) {

        let words = obj.split(/\W+/g).filter(w => w !== '').map(w => w.toLowerCase());

        for (let word of words) {

            result.add(word);
        }
    }

   

    console.log(Array.from(result).join(', '));
}


extractUniqWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Pellentesque quis hendrerit dui.',' Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',' Vestibulum dolor diam, ignissim quis varius non, fermentum non felis.Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',' Morbi in ipsum varius, pharetra diam vel, mattis arcu.','Integer ac turpis commodo, varius nulla sed, elementum lectus.',' Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'])