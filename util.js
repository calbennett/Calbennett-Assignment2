const apiURL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

function fetchPop(){
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
        showData(data);
        })
}

function showData(data){
    console.log('Inside showData()')
    //let dataNoHeader = data.slice(1);
    let output = '<table><thead><tr><th scope="col">US Population</th></tr></thead><tbody><tr>';
    output += '<th scope="col">Year</th><th scope="col">Population</th></tr>';
    for(entry of data){
        let year = entry[3];
        let popul = entry[4];
        console.log('Processing '+year);
        output += `<tr><td>${year}</td><td class="text-end font-monospace">${popul}</td></tr>`;
    } 
    }
        
