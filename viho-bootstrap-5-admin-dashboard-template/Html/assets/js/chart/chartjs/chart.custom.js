Chart.defaults.global = {
    animation: true,
    animationSteps: 60,
    animationEasing: "easeOutIn",
    showScale: true,
    scaleOverride: false,
    scaleSteps: null,
    scaleStepWidth: null,
    scaleStartValue: null,
    scaleLineColor: "#eeeeee",
    scaleLineWidth: 1,
    scaleShowLabels: true,
    scaleLabel: "<%=value%>",
    scaleIntegersOnly: true,
    scaleBeginAtZero: false,
    scaleFontSize: 12,
    scaleFontStyle: "bold",
    scaleFontColor: "#717171",
    responsive: true,
    maintainAspectRatio: true,
    showTooltips: true,
    multiTooltipTemplate: "<%= value %>",
    tooltipFillColor: "#333333",
    tooltipEvents: ["mousemove"],
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    tooltipTitleFontSize: 16,
    TitleFontStyle : "Raleway",
    tooltipTitleFontStyle: "bold",
    tooltipTitleFontColor: "#ffffff",
    tooltipYPadding: 10,
    tooltipXPadding: 10,
    tooltipCaretSize: 8,
    tooltipCornerRadius: 6,
    tooltipXOffset: 5,
    onAnimationProgress: function() {},
    onAnimationComplete: function() {}
};
// GRAPHE A BAR
var barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July","august","september","october","november","december"],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(36, 105, 92, 0.4)",
        strokeColor: vihoAdminConfig.primary,
       
     
        data: [35, 59, 80, 81, 56, 55, 40,66,23,56,100,259]
    },]
};
var barOptions = {
    scaleBeginAtZero: true,
    scaleShowGridLines: true,
   scaleGridLineColor: "rgba(0,0,0,0.1)",
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    barShowStroke: true,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 1,
};
var barCtx = document.getElementById("myBarGraph").getContext("2d");
var myBarChart = new Chart(barCtx).Bar(barData, barOptions);


// var lineGraphData = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [{
//         label: "My First dataset",
//         fillColor: "rgba(36, 105, 92, 0.5)",
//         strokeColor: vihoAdminConfig.primary,
//         pointColor: vihoAdminConfig.primary,
//         pointStrokeColor: "#fff",
//         pointHighlightFill: "#fff",
//         pointHighlightStroke: "#000",
//         data: [10, 59, 80, 81, 56, 55, 40]
//     }, {
//         label: "My Second dataset",
//         fillColor: "rgba(186, 137, 93, 0.3)",
//         strokeColor: vihoAdminConfig.secondary,
//         pointColor: vihoAdminConfig.secondary,
//         pointStrokeColor: "#fff",
//         pointHighlightFill: "#000",
//         pointHighlightStroke: "rgba(30, 166, 236, 1)",
//         data: [28, 48, 40, 19, 86, 27, 90]
//     }]
// };
// var lineGraphOptions = {
//     scaleShowGridLines: true,
//     scaleGridLineColor: "rgba(0,0,0,.05)",
//     scaleGridLineWidth: 1,
//     scaleShowHorizontalLines: true,
//     scaleShowVerticalLines: true,
//     bezierCurve: true,
//     bezierCurveTension: 0.4,
//     pointDot: true,
//     pointDotRadius: 4,
//     pointDotStrokeWidth: 1,
//     pointHitDetectionRadius: 20,
//     datasetStroke: true,
//     datasetStrokeWidth: 2,
//     datasetFill: true,
//     legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
// };
// var lineCtx = document.getElementById("myGraph").getContext("2d");
// var myLineCharts = new Chart(lineCtx).Line(lineGraphData, lineGraphOptions);


var pieData = [
    {
        value: 300,
        color: vihoAdminConfig.primary,
        highlight: vihoAdminConfig.primary,
        label: "Primary"
    },
    {
        value: 50,
        color: vihoAdminConfig.secondary,
        highlight: vihoAdminConfig.secondary,
        label: "Secondary"
    },
    {
        value: 100,
        color: "#d22d3d",
        highlight: "#d22d3d",
        label: "Danger"
    }
];
var pieOptions = {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 0,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};


var doughnutData = [
    {
        value: 300,
        color: vihoAdminConfig.primary,
        highlight: vihoAdminConfig.primary,
        label: "Primary"
    },
    {
        value: 50,
        color: vihoAdminConfig.secondary,
        highlight: vihoAdminConfig.secondary,
        label: "Secondary"
    },
    {
        value: 100,
        color: "#222222",
        highlight: "#222222",
        label: "Success"
    }
];
var doughnutOptions = {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 50,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};
var doughnutCtx = document.getElementById("myDoughnutGraph").getContext("2d");
var myDoughnutChart = new Chart(doughnutCtx).Doughnut(doughnutData, doughnutOptions);
var myLineChart = {
    labels: ["","10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [{
        fillColor: "rgba(113, 113, 113, 0.2)",
        strokeColor: "#717171",
        pointColor: "#717171",
        data: [10, 20, 40, 30, 0, 20, 10, 30, 10]
    },]
}
var ctx = document.getElementById("myLineCharts").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(myLineChart, {
    pointDotRadius: 2,
    pointDotStrokeWidth: 5,
    pointDotStrokeColor: "#ffffff",
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "#eeeeee"
});




// ======================================= //

  // cette fonction permet de charger les data depuis un fichier JSON
     
  function updateDataChart(value){
    async function fetchData(){
      const urlDataJson = 'data.json';
      const response = await fetch(urlDataJson);
      const  datapoints = await response.json();
      //console.log(datapoints)
      return datapoints;
    };

    // récupperation des données par paramettre d"entree
fetchData().then(datapoints=>{
    const month = datapoints.financiairerepport[value].financiair.map(
      function(index){
        return  index.date;
      })
      const revenue = datapoints.financiairerepport[value].financiair.map(
      function(index){
        return  index.revenue;
      })
      const compagnyname = datapoints.financiairerepport[value].companyname;
            // chargement des elements dans le graphe
    barChart.config.data.datasets[0].label = compagnyname;
    barChart.config.data.labels = month;
    barChart.config.data.datasets[0].data = revenue;
    barChart.update();
  });
};




// setup 
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Weekly Sales',
    data: [18, 12, 6, 9, 12, 3,9,2,10,15],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};

// config 
const configbar = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};





// render init block
const barChart = new Chart(
  document.getElementById('barChart'),
  configbar
);


//========================================//