


    // the below function will build both Bar and Bubble charts
    function buildPlot(country){
        
        d3.json("../../Resources/Earthquakes.json").then((data)=> {
            //console.log(data)

            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // Bar Plot

            // filter sample values by country 
            var samples = data.filter(s => s.country === country);
            // console.log(samples);


            // get only top 10 sample id's
            var sampleId = samples.slice(0, 10).map(c => (c.id))
            console.log(sampleId);

            // get only top 10 sample magnitude
            var sampleMag = samples.slice(0, 10).map(c => (c.mag))
            console.log(sampleMag);

            // get only top 10 sample cities
            var sampleCity = samples.slice(0, 10).map(c => (c.city))
            console.log(sampleCity);


            var trace1 = {
                x: sampleId, //["Kettering", "Dubai", "Geeveston", "Denmark", "Panvel", "Chicago", "NewYork", "Goa", "Mumbai", "Oregon"],  
                y: sampleMag, //[4.9, 6, 4.9, 5, 4.4, 5, 4.7, 4.9, 5, 4.3],
                type: 'bar',
                orientation: 'v',
                marker: {
                    color: ['rgba(204,204,204,1)', 'rgba(222,45,38,1)', 'rgba(255,235,205,1)', 'rgba(210,105,30,1)', 'rgba(139,0,139,1)','rgba(143,188,143,1)', 'rgba(178,34,34,1)', 'rgba(255,105,180,1)', 'rgba(32,178,170,1)', 'rgba(25,25,112,1)']
                }
                }



            //console.log(trace1);

            var bar_data = [trace1];
        
            var bar_layout = {
                title: "Countrywise Top 10 Earthquakes",
                height: 600,
                width: 600,
                showlegend: false,
                xaxis: {
                    ticktext: sampleCity,
                    tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                }
            };

            // // create the bar plot
            Plotly.newPlot("bar", bar_data, bar_layout)


            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // Bubble Plot

            // var otuIds = samples.otu_ids;
            // var sampleValues = samples.sample_values;
            // var otuLabels = samples.otu_labels;

            // var trace1 = {
            //     x: otuIds,
            //     y: sampleValues,
            //     mode: "markers",
            //     marker: {
            //         size: sampleValues,
            //         color: otuIds,
            //         colorscale: "Earth"
            //     },
            //     text: otuLabels

            // };

            // // create the data variable 
            // var bubble_data = [trace1];

            // // set the layout for the bubble plot
            // var bubble_layout = {
            //     title: "OTU ID",
            //     height: 600,
            //     width: 1200
            // };

            // // create the bubble plot
            // Plotly.newPlot("bubble", bubble_data, bubble_layout);
            
        });
    };

    // buildPlot('AU');
    
    // // below function will build the Demographic Info table
    // function metadata(subject) {
    //     d3.json("data/samples.json").then((data) => {
    //         var metadata = data.metadata;
    //         var subjectMetadata = metadata.filter(subjects => subjects.id == subject);
            
    //         //console.log(subjectMetadata[0]);

    //         var subjectResult = subjectMetadata[0];

    //         var demoTable = d3.select("#sample-metadata");
    
    //         demoTable.html("");
          
    //         Object.entries(subjectResult).forEach(([key, value]) => {
    //             demoTable.append("h6").append("b").text(key + ': ' + value); 
    //         })
    //     })
    // };



    // the below function will be called once user selects any name from dropdown
    // It will inturn call child build plot function to display the Bar and Bubble charts
    function optionChanged(newCountry) {
        buildPlot(newCountry);
        //metadata(newSubject);
    };



    // the below function will show all the names under dropdown
    // it will append all those names to dropdown
    // it will also display default Bar and Bubble charts for - 940
    function init() {
        var selectSubject = d3.select("#selDataset");
       
        d3.json("../../Resources/Earthquakes.json").then((data) => {
            
            var country = data[0].country;

            data.forEach((subject) => {
                // var country = data.country;
                // console.log(subject.country);
                
                selectSubject.append("option").text(subject.country);
            });

            // call the functions to display the data and the plots for default id - 940
            buildPlot(country);
            // metadata(data.names[0]);
            
        })
    };
    

    
    // call the init function to display default Bar, Bubble charts and Demographic Info table for - 940
    init();





    