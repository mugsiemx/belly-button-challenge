// Get the api endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// let selDataset = document.getElementById("selDataset");
// selDataset.addEventListener("optionChanged", selDataset)

const navelId = 1601;



// 1. convert JSON file to an array of objects
let data = d3.json(url).then(function(data) {
    // console.log(data);

// create D3 html "variables"
// to select Navel Id from drop down list
let navelDropDown = d3.select("#selDataset");
// to select Navel Id from drop down list
let demographicsView = d3.select("#sample-metadata");

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
    let plotTitle = 'Top 10 Bacteria for Navel Id: 1601'

        // then otu_ids as labels for the bar chart
    let otu_ids = filteredSample.otu_ids;
        // console.log(otu_ids);

        // then otu_labels as the hovertext for the chart
    let otu_labels = filteredSample.otu_labels;
        // console.log(otu_labels);

            // y axis data to select top 10 (data default is sort desc)
    let ybarAxisData = otu_ids.slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse();
        // console.log(xAxisData);

            // x axis data to select top 10 (data default is sort desc)
    let xbarAxisData = sample_values.reverse().slice(0,10);
        // console.log(yAxisData);

            // hovertext data to select top 10 (data default is sort desc)
    let hoverText = otu_labels.reverse().slice(0,10);
        // console.log(hoverText);
            // bar chart x axis
    let xbarMin = Math.min(xbarAxisData)
    let xbarMax = Math.max(xbarAxisData)
    console.log(xbarMin, xbarMax)

    // create filtered data for individual's demographics for the selected Navel Id
    let filteredMetadata = metadata.filter(bacteriaData => bacteriaData.id == navelId)[0];
        // console.log(filteredMetadata);

  

// 2. create horizontal bar chart to display the top 10 OTUs for individual's navels
    // trace for the navel data
    console.log(ybarAxisData);
    console.log(xbarAxisData);
    let traceBar = {
        x: xbarAxisData,
        y: ybarAxisData,
        text: hoverText,
        marker: {
            color: "teal",
            width: 1
        },
        type: "bar",
        orientation: "h"
    };
    
    // Create data array
    let barData = [traceBar];

    // Apply a title to the layout
    let barLayout = {
        title: plotTitle,    
        // Include margins in the layout so the x-tick labels display correctly
        margin: {
            l: 150,
            r: 0,
            b: 75,
            t: 50,
            pad: 0,
        }
    };
    
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", barData, barLayout);

// 3. create bubble chart that displays each sample
    // trace for the navel data
    console.log(otu_ids)
    console.log(sample_values)
    let traceBubble = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        type: "bubble",
        marker:{
            size: sample_values,
            color: otu_ids,
            colorscale: 'Hot'
        }        
    };
    
    // Create data array
    let bubbleData = [traceBubble];

    let bubbleLayout = {
        title: plotTitle,
        showlegend: false,
        height: 600,
        width: 1300
      };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

// 4. display the sample metadata, i.e., an individual's demographic info    
// 5. Display each key-value pair from the metadata JSON object somewhere on the page.
    Object.entries(filteredMetadata).forEach(entry => {
    let [key, value] = entry;
   // console.log(key, value);
        demographicsView.append("p").text(`${key}: ${value}`);
  });
});
// 6. update all the plots when a new sample is selected
    // function updatePlotly(newId) {
    //     Plotly.restyle("bar", "values", [newdata]);
        // Plotly.restyle("bubble", "values", [newdata]);
    // }