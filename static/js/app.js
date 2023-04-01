// Get the api endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// let selDataset = document.getElementById("selDataset");
// selDataset.addEventListener("optionChanged", selDataset)

// let idsData = [];

// convert JSON file to an array of objects
let data = d3.json(url).then(function(data) {
    console.log(data);

    //
    let selDataset = Object.values(data.names)
    console.log(selDataset)
    
    // dropdown list option not selected, make blank
    let option = "";

    // add values to form drop down list
    for(let i =0;i<selDataset.length;i++)
    {
    option += '<option value="'+ selDataset[i] +'">' + selDataset[i] + "</option>"
    }
    document.getElementById('selDataset').innerHTML = option
});

