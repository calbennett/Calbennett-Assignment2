//Get the data from the API
function getData() {
    return fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then(response => response.json())
        .then(data => data.data)
        console.log("Getting data")    
    };

//Sort and display the data
function displayData(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    const dataSorted = data.sort((a, b) => a.Year - b.Year);
    //For each row in the data, create a row in the table
    dataSorted.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.Year}</td><td>${item.Population}</td>`;
        tableBody.appendChild(row);
    });
}
//Call getData() and displayData() on load
document.addEventListener('DOMContentLoaded', function() {
    getData().then(data => {
        displayData(data);
    });
});
