d3.json("../../Resources/Earthquakes.json").then((data)=> {

    var trace1 = {
        x: [160,6,2870,2,6271,7,1,13,22],
        y: ['mb','mb_lg','md','mh','ml','mw','mwb','mwr','mww'],
        // text: otuLabels,
        type: 'bar',
        orientation: 'h'
    };

    console.log(trace1);

    var bar_data = [trace1];

    var bar_layout = {
        title: "Top 10 OTU's for individual",
        height: 600,
        width: 800
    };

    // create the bar plot
    Plotly.newPlot("bar", bar_data, bar_layout)

});

//   // var arr = data.map(a => a.magtype);
//   var arr = data.map(a => a.country );

// function foo(arr) {
//     var a = [], b = [], prev;
    
//     arr.sort();
//     for ( var i = 0; i < arr.length; i++ ) {
//         if ( arr[i] !== prev ) {
//             a.push(arr[i]);
//             b.push(1);
//         } else {
//             b[b.length-1]++;
//         }
//         prev = arr[i];
//     }
    
//     return [a, b];
// }

// var result = foo(arr);
// document.write('[' + result[0] + ']<br>[' + result[1] + ']') 
//  });

// // ----------------------------------------------------------------------------------------------------------------------
// // PLOTTING THE GRAPH (ALL COUNTRIES)
// var options = {
//   series: [{
//   data: [3,2,1,13,3,9,30,1,3,17,3,1,3,7,26,12,20,18,15,4,1,1,2,4,1,9147,3,2]
// }],
//   chart: {
//   type: 'bar',
//   height: 380
// },
// plotOptions: {
//   bar: {
//     barHeight: '100%',
//     distributed: true,
//     horizontal: true,
//     dataLabels: {
//       position: 'bottom'
//     },
//   }
// },
// colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
//   '#f48024', '#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
//   '#f48024', '#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
//   '#f48024', '#33b2df'
// ],
// dataLabels: {
//   enabled: true,
//   textAnchor: 'start',
//   style: {
//     colors: ['BLACK']
//   },
//   formatter: function (val, opt) {
//     return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
//   },
//   offsetX: 0,
//   dropShadow: {
//     enabled: true
//   }
// },
// stroke: {
//   width: 1,
//   colors: ['#fff']
// },
// xaxis: {
//   categories: ['AL','AR','AT','AU','BR','CA','CL','EC','FM','GR','IN','IR','IT','JP','MX','NC','NZ','PE','PH','PT','RE','RO',
//   'SJ','TW','UG','US','VE','ZA'
//   ],
// },
// yaxis: {
//   labels: {
//     show: false
//   }
// },
// title: {
//     text: 'Earthquakes Per Country',
//     align: 'center',
//     floating: true
// },
// subtitle: {
//     text: 'Last 30 Days',
//     align: 'center',
// },
// tooltip: {
//   theme: 'dark',
//   x: {
//     show: false
//   },
//   y: {
//     title: {
//       formatter: function () {
//         return ''
//       }
//     }
//   }
// }
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();

// //-----------------------------------------------------------------------------------------------------------
// // PLOTTING THE GRAPH (ALL MAGTYPES)
// var options = {
//   series: [{
//   data: [160,6,2870,2,6271,7,1,13,22]
// }],
//   chart: {
//   type: 'bar',
//   height: 380
// },
// plotOptions: {
//   bar: {
//     barHeight: '100%',
//     distributed: true,
//     horizontal: true,
//     dataLabels: {
//       position: 'bottom'
//     },
//   }
// },
// colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
//   '#f48024'
// ],
// dataLabels: {
//   enabled: true,
//   textAnchor: 'start',
//   style: {
//     colors: ['#fff']
//   },
//   formatter: function (val, opt) {
//     return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
//   },
//   offsetX: 0,
//   dropShadow: {
//     enabled: true
//   }
// },
// stroke: {
//   width: 1,
//   colors: ['#fff']
// },
// xaxis: {
//   categories: ['mb','mb_lg','md','mh','ml','mw','mwb','mwr','mww'
//   ],
// },
// yaxis: {
//   labels: {
//     show: false
//   }
// },
// title: {
//     text: 'Custom DataLabels',
//     align: 'center',
//     floating: true
// },
// subtitle: {
//     text: 'Category Names as DataLabels inside bars',
//     align: 'center',
// },
// tooltip: {
//   theme: 'dark',
//   x: {
//     show: false
//   },
//   y: {
//     title: {
//       formatter: function () {
//         return ''
//       }
//     }
//   }
// }
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();

// // PLOTTING THE GRAPH (TOP 3)
// var options = {
//   series: [{
//   data: [6271,2870,160]
// }],
//   chart: {
//   type: 'bar',
//   height: 380
// },
// plotOptions: {
//   bar: {
//     barHeight: '100%',
//     distributed: true,
//     horizontal: true,
//     dataLabels: {
//       position: 'bottom'
//     },
//   }
// },
// colors: ['#d4526e', '#f48024', '#33b2df'
// ],
// dataLabels: {
//   enabled: true,
//   textAnchor: 'start',
//   style: {
//     colors: ['#fff']
//   },
//   formatter: function (val, opt) {
//     return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
//   },
//   offsetX: 0,
//   dropShadow: {
//     enabled: true
//   }
// },
// stroke: {
//   width: 1,
//   colors: ['#fff']
// },
// xaxis: {
//   categories: ['ml','md', 'mb'
//   ],
// },
// yaxis: {
//   labels: {
//     show: false
//   }
// },
// title: {
//     text: 'Top 3 Magnitude Types',
//     align: 'center',
//     floating: true
// },
// subtitle: {
//     text: 'Last 30 Days',
//     align: 'center',
// },
// tooltip: {
//   theme: 'dark',
//   x: {
//     show: false
//   },
//   y: {
//     title: {
//       formatter: function () {
//         return ''
//       }
//     }
//   }
// }
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render()