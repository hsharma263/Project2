// am4core.useTheme(am4themes_animated);

// var chart = am4core.create("chartdiv", am4charts.SlicedChart);
// chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

// chart.data = [{
//         "name": "The first",
//         "value": 600
//     }, {
//         "name": "The second",
//         "value": 300
//     }, {
//         "name": "The third",
//         "value": 200
//     }, {
//         "name": "The fourth",
//         "value": 180
//     }, {
//         "name": "The fifth",
//         "value": 50
//     }, {
//         "name": "The sixth",
//         "value": 20
//     }, {
//         "name": "The seventh",
//         "value": 10
//     }];

// var series = chart.series.push(new am4charts.FunnelSeries());
// series.colors.step = 2;
// series.dataFields.value = "value";
// series.dataFields.category = "name";
// series.alignLabels = true;
// series.labelsContainer.paddingLeft = 15;
// series.labelsContainer.width = 200;
// //series.orientation = "horizontal";
// //series.bottomRatio = 1;

// chart.legend = new am4charts.Legend();
// chart.legend.position = "left";
// chart.legend.valign = "bottom";
// chart.legend.margin(5, 5, 20, 5);


am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    
    chart.data = [{
        "name": "ml",
        "value": 6271
    }, {
        "name": "md",
        "value": 2870
    }, {
        "name": "mb",
        "value": 160
    }, {
        "name": "mww",
        "value": 22
    }, {
        "name": "mwr",
        "value": 13
    }, {
        "name": "mw",
        "value": 7
    }, {
        "name": "mb_lg",
        "value": 6
    }, {
        "name": "mh",
        "value": 2
    }, {
        "name": "mwb",
        "value": 1
    },];
    
    var series = chart.series.push(new am4charts.FunnelSeries());
    series.colors.step = 2;
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = true;
    
    series.labelsContainer.paddingLeft = 15;
    series.labelsContainer.width = 200;
    
    //series.orientation = "horizontal";
    //series.bottomRatio = 1;
    
    chart.legend = new am4charts.Legend();
    chart.legend.position = "left";
    chart.legend.valign = "bottom";
    chart.legend.margin(5,5,20,5);
    
    }); // end am4core.ready()