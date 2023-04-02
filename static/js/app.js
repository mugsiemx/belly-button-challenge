// Get the api endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// let selDataset = document.getElementById("selDataset");
// selDataset.addEventListener("optionChanged", selDataset)

const navelId = 1601;



// 1. convert JSON file to an array of objects
let data = d3.json(url).then(function(data) {
    // console.log(data);

    // create variables for individual navel data
    let names = data.names;
        //console.log(names);
    let samples = data.samples;
        //console.log(samples);
    let metadata = data.metadata;
       // console.log(metadata);

    // define all required variables:
    // create filtered data for individual's navel data
    let filteredSample = samples.filter(bacteriaData => bacteriaData.id == navelId)[0];
        // console.log(filteredSample);

        // then sample_values for the bar chart
    let sample_values = filteredSample.sample_values;
        // console.log(sample_values);

        // then title for plots
    let plotTitle = 'Top 10 Individual Navel Bacterial for Navel Id: 1601'

        // then otu_ids as labels for the bar chart
    let otu_ids = filteredSample.otu_ids;
        // console.log(otu_ids);

        // then otu_labels as the hovertext for the chart
    let otu_labels = filteredSample.otu_labels;
        // console.log(otu_labels);

            // x axis data to select top 10 (data default is sort desc)
    let xAxisData = sample_values.slice(0,10);
        // console.log(xAxisData);

            // y axis data to select top 10 (data default is sort desc)
    let yAxisData = otu_ids.slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse();
        // console.log(yAxisData);

            // hovertext data to select top 10 (data default is sort desc)
    let hoverText = otu_labels.slice(0,10);
        // console.log(hoverText);

    // create filtered data for individual's demographics    
    let filteredMetadata = metadata.filter(bacteriaData => bacteriaData.id == navelId)[0];
        // console.log(filteredMetadata);






    // let selDataset = Object.values(data.names)
    // console.log(selDataset)
    
    // dropdown list option not selected, make blank
    // let option = "";

    // // add values to form drop down list
    // for(let i =0;i<selDataset.length;i++)
    // {
    // option += '<option value="'+ selDataset[i] +'">' + selDataset[i] + "</option>"
    // }






// 2. create horizontal bar chart to display the top 10 OTUs for individualS

        // trace for the navel data
        let trace = [{
            x: xAxisData,
            y: yAxisData,
            text: hoverText,
            type: "bar",
            orientation: "h"
        }];
        
        // Create data array
        let barData = [trace];
        
        // Apply a title to the layout
        let barLayout = {
            title: plotTitle,
            // Include margins in the layout so the x-tick labels display correctly
            margin: {
            l: 50,
            r: 50,
            b: 200,
            t: 50,
            pad: 4
            }
        };
        
        // Render the plot to the div tag with id "plot"
        Plotly.newPlot("bar", barData, barLayout);

// 3. create bubble chart that displays each sample
// 4. display the sample metadata, i.e., an individual's demographic info
// 5. Display each key-value pair from the metadata JSON object somewhere on the page.
});
// 6. update all the plots when a new sample is selected