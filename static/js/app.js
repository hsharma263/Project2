

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
            // console.log(sampleId);

            // get only top 10 sample magnitude
            var sampleMag = samples.slice(0, 10).map(c => (c.mag))
            // console.log(sampleMag);

            // get only top 10 sample cities
            var sampleCity = samples.slice(0, 10).map(c => (c.city))
            // console.log(sampleCity);


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
                height: 800,
                width: 800,
                showlegend: false,
                xaxis: {
                    ticktext: sampleCity,
                    tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                },
                font: {
                    family: 'Arial, monospace',
                    size: 18,
                    color: '#7f7f7f'
                  }
            };

            // // create the bar plot
            Plotly.newPlot("bar", bar_data, bar_layout)


            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // Bubble Plot

            var trace1 = {
                x: sampleCity,
                y: sampleMag,
                mode: "markers",
                marker: {
                    size: sampleMag.map(a => a*40),
                    color: [10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 240],
                    colorscale: "Earth"
                },
                text: sampleCity

            };

            // create the data variable 
            var bubble_data = [trace1];

            // set the layout for the bubble plot
            var bubble_layout = {
                title: "Countrywise Top 10 Earthquakes",
                height: 600,
                width: 1000,
                font: {
                    family: 'Arial',
                    size: 15,
                    color: '#7f7f7f'
                  }
            };

            // create the bubble plot
            Plotly.newPlot("bubble", bubble_data, bubble_layout);
            
        });
    };

    // buildPlot('AU');

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    

    // below function will build the Demographic Info table
    function metadata(subject) {
        d3.json("../../Resources/Earthquakes.json").then((data) => {

            // filter sample values by country 
            var samples = data.filter(s => s.country === subject);
            // console.log(samples);

            // get only 1 country out of multiple country records
            var sampleCountry = samples.slice(0, 1)
            // console.log(sampleCountry[0]);

            // select the demo table 
            var demoTable = d3.select("#sample-metadata");
            
            // Clear the html demo table
            demoTable.html("");
            
            // attach the required fields to demo table
            Object.entries(sampleCountry[0]).forEach(([key, value]) => {
                if (key === "mindepth" || key === "maxdepth" || key === "minmag" || key === "maxmag" || key === "count" || key === "mindate" || key === "maxdate") {
                    
                    demoTable.append("h6").append("b").text(key + ': ' + value);

                }
                

            });
            
        })
    };


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    // the below function will be called once user selects any name from dropdown
    // It will inturn call child build plot function to display the Bar and Bubble charts
    function optionChanged(newCountry) {
        buildPlot(newCountry);
        metadata(newCountry);
    };

    
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
         

    // the below function will show all the names under dropdown
    // it will append all those names to dropdown
    // it will also display default Bar and Bubble charts for - 940
    function init() {
        
        var selectSubject = d3.select("#selDataset");
       
        d3.json("../../Resources/Earthquakes.json").then((data) => {

            var country = data[0].country;

            // Get the all countries
            var countryList = data.map(a => a.country);
            // console.log(countryList);

            // Get the Unique list
            var uniqueCountryList = Array.from(new Set(countryList));
            // console.log(uniqueCountryList);
                        
            // Append the countries to the dropdown
            uniqueCountryList.forEach((subject) => {
                // var country = data.country;
                // console.log(subject.country);
                
                selectSubject.append("option").text(subject);
            });

            // call the function to display the data and the plots for default country
            buildPlot(country);
            metadata(country);
            
        })
    };
    
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    // call the init function to display default Bar, Bubble charts and Demographic Info table for - 940
    init();





    