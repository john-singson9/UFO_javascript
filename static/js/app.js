// from data.js
var tableData = data;

// select table body
var tbody = d3.select("tbody");

// select table
var table = d3.select("table");

// striped table
table.attr("class", "table table-striped");

console.log(data);

// build the initial table with the contents from data.js
function buildTable(aliens) {
  aliens.forEach((alienSightings) => {
    var row = tbody.append("tr");
    Object.entries(alienSightings).forEach(([key, value]) => {
        var sightings = tbody.append("td")
        sightings.text(value);
    });
}); 
}

// initiate the buildtable function with the data from tableData
buildTable(tableData);


// select the submit button in html
var submit = d3.select("#filter-btn");

// turn it on
submit.on("click", function() {

    // empty the table contents for the new table with filters
    tbody.html("")

    // prevent the page from refreshing
    d3.event.preventDefault();

    // set the inputs and value
    var date_input = d3.select("#datetime");
    var date_value = date_input.property("value");

    console.log(date_input);
    console.log(date_value);

    // filter the data
    var filteredData = tableData.filter(person => person.datetime === date_value);

    // create an else if statement to differentiate between the filtered data
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