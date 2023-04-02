// Get the api endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// let selDataset = document.getElementById("selDataset");
// selDataset.addEventListener("optionChanged", selDataset)

const navelId = 1601;



// convert JSON file to an array of objects
let data = d3.json(url).then(function(data) {
    // console.log(data);

    // create variables for individual navel data
    let names = data.names;
        //console.log(names);
    let samples = data.samples;
        //console.log(samples);
    let metadata = data.metadata;
       // console.log(metadata);


    // create filtered data (sort/slice) for individual navel data
    let filteredSample = samples.filter(bacteria => bacteria.id == navelId).reverse();
    let slicedSample = filteredSample.slice(0,10);
        console.log(slicedSample)
    // let filteredMeta = metadata.filter(bacteriaData => bacteriaData.id == navelId)


    // create variables for bar chart

    let sampleIds = samples.id;
        // console.log(sampleIds)
    let otuIds = samples.otu_ids;
    let otuLabels = samples.otu_labels;
    let sampleValues = samples.sample_values;






    // let selDataset = Object.values(data.names)
    // console.log(selDataset)
    
    // dropdown list option not selected, make blank
    // let option = "";

    // // add values to form drop down list
    // for(let i =0;i<selDataset.length;i++)
    // {
    // option += '<option value="'+ selDataset[i] +'">' + selDataset[i] + "</option>"
    // }



});


// // create horizontal bar chart to display the top 10 OTUs for individualS
// let xdata = otuIds;

// // trace for the subject data
// let trace = {
//     x: names,
//     y: romanSearchResults,
//     text: romanNames,
//     name: "Subject ID",
//     type: "bar"
//   };
  
//   // Create data array
//   let barData = [trace];
  
//   // Apply a title to the layout
//   let layout = {
//     title: "Test Navel Id: + $(navelId)",
//     barmode: "group",
//     // Include margins in the layout so the x-tick labels display correctly
//     margin: {
//       l: 50,
//       r: 50,
//       b: 200,
//       t: 50,
//       pad: 4
//     }
//   };
  
//   // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("plot", data, layout);