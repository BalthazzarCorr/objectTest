function jsonTable(input) {

    let html = '<table>\n';


    for (let obj of input) {

        html += '   <tr>\n';

        let parsedInput = JSON.parse(obj);


        html += `       <td>${escapeHTML(parsedInput.name)}</td>\n`;
        html += `       <td>${escapeHTML(parsedInput.position)}</td>\n`;
        html += `       <td>${Number(parsedInput.salary)}</td>\n`;

        html += '   <tr>\n';
    }


    html += '</table>';

    console.log(html);


    function escapeHTML(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;',
        };

        return text.replace(/[\\"&'<>]/g, c => map[c]);
    }
}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])