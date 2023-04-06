
    // Get the api endpoint
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
    var navelId

// function createVisuals(navelId) {


//         // Object.entries(data.names).forEach(entry => {
//         //     console.log(data.names)
//         //     let [value] = entry;
//         //     console.log(value)
//         // // console.log(key, value);
//         //     dropdownMenu.append("p").text(`${value}`);
//         // });

    

//         createVisuals(navelId)
//         })}; 

//         // create initial charts in a fashion to be updated later
//         function createVisuals();

        //     var navelId = 1601;
//     //     function newId();
//     //     navelId = selDataset;
//     //     return navelId;
//         // const dropdown = document.getElementById('selDataset')[0];
//         // console.log(selDataset);
//         let dropdownMenu = d3.select("#selDataSet");
//             names.orEach(function(name) {
//             dropdownMenu.append("option").text(name);


//     // to select Navel Id from drop down list

//     // } else {
//     //     // begin with a random test subject so the Dashboard displays data
//     //     let randomId = names[Math.floor(Math.random()*names.length)];
//     //     navelId = parseInt(randomId);
//     //     return navelId       
//     // };
        
//     // begin with a random test subject so the Dashboard displays data
//         // let randomId = names[Math.floor(Math.random()*names.length)];
//         // console.log(randomId);
//         // navelId = parseInt(randomId);
//         // console.log(navelId)

        
        
//         // selDataset.addEventListener("optionChanged", selDataset)
//         //  navSlId = document.getElementById("selDataset").value
            



//     //     }
//     //)

//     // let dropdownMenu = document.getElementById("selDataSet")

//         // begin with a random test subject so the Dashboard displays data
//         let randomId = names[Math.floor(Math.random()*names.length)];
//         // console.log(randomId);
//         navelId = parseInt(randomId)
//         // const navelId = 1601;
//         // dashboard()

function createVisuals(navelId) {
    console.log(navelId);
// 1. convert JSON file to an array of objects
    let data = d3.json(url).then(function(data) {
        // console.log(data);  
    let samples = data.samples;
        // console.log(samples);
    let metadata = data.metadata;   
        // console.log(metadata);

    // define all required variables:
    // create filtered data for individual's navel data
    let filteredSample = samples.filter(bacteriaData => bacteriaData.id == navelId)[0];
        console.log(filteredSample);

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

        // var washy = 0
        // if (filteredMetadata.wfreq != "null") {
        //     washy = parseInt(filteredMetadata.wfreq);
        //     }   
        // });
            // console.log(washy)

// 2. create horizontal bar chart to display the top 10 OTUs for individual's navels
    
    // trace for the navel data bar chart
    let traceBar = {
        x: xbarAxisData,
        y: ybarAxisData,
        text: hoverText,
        marker: {
            color: "MediumAquaMarine",
            width:  1
        },
        type: "bar",
        orientation: "h"
    };    
    // Create data array for bar chart
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
    let demographicsView = d3.select("#sample-metadata");
    // 5. Display each key-value pair from the metadata JSON object somewhere on the page.
// create filtered data for individual's demographics for the selected Navel Id
       // let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    // let dataset = dropdownMenu.property("value");
    Object.entries(filteredMetadata).forEach(entry => {
        let [key, value] = entry;
    // console.log(key, value);
        demographicsView.append("p").text(`${key}: ${value}`).property("value", navelId);
    });

    // advanced challenge assignment
        let gaugeData = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: washy,
                title:{text: "Number of Washings per Week"},
                type: "indicator",
                mode: "gauge+number",
                gauge:{
                    axis: {range: [null, 9]},
                },
            },
        ];              
        let gaugeLayout = { width: 600, height: 600 };    
        Plotly.newPlot('gauge', gaugeData, gaugeLayout);
})};



// 6. update all the plots when a new sample is selected
function optionChanged(navelId) {
    console.log(navelId);
    createVisuals(navelId);
    };

// Then learn something fun
function dashBoard(){
    // var navelId
    // to select Navel Id from drop down list
    // let dropdownMenu = d3.select("#selDataSet");
    // Use D3 to make the dropdown menu
    d3.json(url).then(function(data) {
    // create variables for individual navel data
        // let navelIds = data.names;
    // fill the dropdown menu rows        
        // navelIds.forEach(function(navelId) {
        //     dropdownMenu.append("option").text(navelId).property("value", navelId); 
        
    // begin with a random test subject so the Dashboard displays data
    // let randomId = navelIds[Math.floor(Math.random()*navelIds.length)];
    // // console.log(randomId);
    // navelId = parseInt(randomId);
        // console.log(navelId)
        // set up the drop down list for selection
        let selDataset = Object.values(data.names)
        let option = ""
        // allow for a random selection
        option += "<option value=>" + "select" + "</option>";
        // then add the belly button Ids to the drop down menu
        for (let i = 0; i < selDataset.length; i++)
        {
        option += '<option value="'+ selDataset[i] +'">' + selDataset[i] + "</option>"
        }
        document.getElementById('selDataset').innerHTML = option
        console.log(option)
        console.log(selDataset)
    // let navelId = d3.select("#selDataset");
    // show a data for a randomly selected navel Id
    createVisuals(navelId);
})};

// Let's begin
dashBoard()

//     // // Call updatePlotly() when a change takes place to the DOM
    d3.selectAll("#selDataset").on("change", createVisuals);

// This function is called when a dropdown menu item is selected
// function demoGraphics(navelId) {
      

// };
//     // document.addEventListener("optionChanged", newId)


//     //   // Initialize x and y arrays
//     //   let x = [];
//     //   let y = [];


//     //   // Note the extra brackets around 'x' and 'y'
//     //   Plotly.restyle("bar", "x", [x]);
//     //   Plotly.restyle("bubble", "y", [y]);
//     //   Plotly.restyle("gauge", "y", [y]);
//     // }

//     // init();
//     });

//     // const getId = () => {
//     //     const select = document.querySelector("h5")
//     //     alert("do something");
//     //     // if(selDataset == "random") {
//     //     // // begin with a random test subject so the Dashboard displays data
//     //     //     let randomId = names[Math.floor(Math.random()*names.length)];
//     //     //     navelId = parseInt(randomId);
//     //     //     return navelId;  
//     //     // } else {
//     //     //     navelId = selDataset[0];
//     //     //     return navelId;
//     //     // };
//     // };
// function optionChanged(navelId) {;
//         console.log(navelId);      
   
       
//     //     var selDataset = document.getElementById("selDataset");
//     //     var result = document.getElementById("h5");
//     };
        
//         //https://www.youtube.com/watch?v=TF3QGo2_AvY

//     // function updatePlotly(newId) {
//     //     Plotly.restyle("bar", "values", [newdata]);
//     //     Plotly.restyle("bubble", "values", [newdata]);


// selDataset.addEventListener("optionChanged", () => {
//     navelId = this[this.selectedIndex].innerHTML

//     console.log(navelId + "line 288")
// });

dashBoard();
