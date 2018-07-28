// from data.js
var tableData = data;

// select table body
var tbody = d3.select("tbody");

// select table
var table = d3.select("table");

// striped table
table.attr("class", "table table-striped");

console.log(data);

function buildTable(aliens) {
  aliens.forEach((alienSightings) => {
    var row = tbody.append("tr");
    Object.entries(alienSightings).forEach(([key, value]) => {
        var sightings = tbody.append("td")
        sightings.text(value);
    });
}); 
}

buildTable(tableData);


var submit = d3.select("#filter-btn");

submit.on("click", function() {

    tbody.html("")

    d3.event.preventDefault();

    var date_input = d3.select("#datetime");
    var date_value = date_input.property("value");

    console.log(date_input);
    console.log(date_value);

    var filteredData = tableData.filter(person => person.datetime === date_value);

    if(!date_value) {
        buildTable(tableData);
    }
    else if (filteredData.length === 0) {
        buildTable(tableData);
    }
    else {
        console.log(filteredData);
        buildTable(filteredData);
    }

});