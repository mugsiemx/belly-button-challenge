// Get the api endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// let selDataset = document.getElementById("selDataset");
// selDataset.addEventListener("optionChanged", selDataset)

// const navelId = 1601;

// 1. convert JSON file to an array of objects
let data = d3.json(url).then(function(data) {
    // console.log(data);





    // Object.entries(data.names).forEach(entry => {
    //     console.log(data.names)
    //     let [value] = entry;
    //     console.log(value)
    // // console.log(key, value);
    //     dropdownMenu.append("p").text(`${value}`);
    // });


// to select Navel Id from drop down list
// let navelId = d3.select("#selDataset");
// to select Navel Id from drop down list
let demographicsView = d3.select("#sample-metadata");

    // create variables for individual navel data
    let names = data.names;
        //console.log(names);
    let samples = data.samples;
        //console.log(samples);
    let metadata = data.metadata;
        console.log(metadata);
        
// let dropdownMenu = d3.select("#selDataset");
// let selDataset = dropdownMenu.property("value";)
// let selDataset = dropdownMenu.getElementById("selDataset");
    
    
    // for (i = 0; i < names.length; i++) {
    //     dropdownMenu = names[i];
    // }


    // begin with a random test subject so the Dashboard displays data
    // let randomId = names[Math.floor(Math.random()*names.length)];
    // console.log(randomId);
    // let navelId = parseInt(randomId)
    const navelId = 1601;
    // dashboard()

// function dashboard();
    // define all required variables:
    // create filtered data for individual's navel data
    let filteredSample = samples.filter(bacteriaData => bacteriaData.id == navelId)[0];
        // console.log(filteredSample);

        // then sample_values for the bar chart
    let sample_values = filteredSample.sample_values;
        // console.log(sample_values);

        // then title for plots
    let plotTitle = ('Top 10 Bacteria for Navel Id:' + navelId); 

        // then otu_ids as labels for the bar chart
    let otu_ids = filteredSample.otu_ids;
        // console.log(otu_ids);

        // then otu_labels as the hovertext for the chart
    let otu_labels = filteredSample.otu_labels;
        // console.log(otu_labels);

        // y axis data to select top 10 (data default is sort desc)
    let ybarAxisData = otu_ids.slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse();
        // console.log(ybarAxisData);

            // x axis data to select top 10 (data default is sort desc)
    let xbarAxisData = sample_values.reverse().slice(0,10);
        // console.log(xbarAxisData);

            // hovertext data to select top 10 (data default is sort desc)
    let hoverText = otu_labels.reverse().slice(0,10);
        // console.log(hoverText);

    // create filtered data for individual's demographics for the selected Navel Id
    let filteredMetadata = metadata.filter(bacteriaData => bacteriaData.id == navelId)[0];
        // console.log(filteredMetadata);
    let washy = parseInt(filteredMetadata.wfreq);
        // console.log(washy)

// 2. create horizontal bar chart to display the top 10 OTUs for individual's navels
    // trace for the navel data
    let traceBar = {
        x: xbarAxisData,
        y: ybarAxisData,
        text: hoverText,
        marker: {
            color: "MediumAquaMarine",
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
    // console.log(otu_ids)
    // console.log(sample_values)
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
        xaxis:{
            title:{
                text: 'OTU ID',
            },
        },
        automargin: true,
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


// advanced challenge assignment
    let gaugeData = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: washy,
            title: { text: "Scrubs per Week" },
            subtitle:{text: "Belly Button Washing Frequency"},
            type: "indicator",
            mode: "gauge+number"
        },
    ];              
    let gaugeLayout = { width: 600, height: 600 };    
    Plotly.newPlot('gauge', gaugeData, gaugeLayout);

// 6. update all the plots when a new sample is selected
// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   let dataset = dropdownMenu.property("value");



//   // Initialize x and y arrays
//   let x = [];
//   let y = [];


//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle("bar", "x", [x]);
//   Plotly.restyle("bubble", "y", [y]);
//   Plotly.restyle("gauge", "y", [y]);
// }

// init();


// function updatePlotly(newId) {
//     Plotly.restyle("bar", "values", [newdata]);
//     Plotly.restyle("bubble", "values", [newdata]);
});
// init();