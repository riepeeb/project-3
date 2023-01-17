//Rilee 

{/* <button onclick="updateChart()">Fetch Now</button>
</div> */}
//// Rilee Fetch Block // not working** 
// function updateChart() {

// async function fetchData() {
//     const url = "./../API_Data/yr_visitors.json";
//     const response = await fetch(url);
//     const datapoints = await response.json();
//     console.log(datapoints);
//     return datapoints;
// };

// fetchData().then(datapoints => {
//     const year = datapoints[0].map(
//         function(index){
//             return index.year;
//         })
//     console.log(visitors);
    
//     myChart.config.data.labels = visitors
//     myChart.update();
// });
// }

// trying to put in bar chart with plotly

// Inserting bar chart
// function getData() {
//     $.ajax({
//         type: 'GET',
//         url: "./../API_Data/sum_visitors",
//         dataType: 'json'
//     }).done(function (jsonData){
//     });
// }

var url = "./../API_Data/sum_visitors_static.json"

let month = Object.values(url.month);
let nonrecreationhours = Object.values(url.nonrecreationhours);
let nonrecreationvisitors = Object.values(url.nonrecreationvisitors);
let recreationhours = Object.values(url.recreationhours);
let recreationvisitors = Object.values(url.recreationvisitors);
let rvcampers = Object.values(url.rvcampers);
let tentcampers = Object.values(url.tentcampers);
let totalovernightstays = Object.values(url.totalovernightstays);
let year = Object.values(url.year);

let labels = Object.keys(url.month)


function init() {
    let data =[{
        values: totalovernightstays,
        labels: labels,
        type: "bar"
    }]

    let layout = {
        height: 600,
        width: 800
    };
    Plotly.newPlot("bar", data, layout);
}


// Rilee trying to put in a chart with chart.js
var xmlhttp = new XMLHttpRequest();
var url = "./../API_Data/lodge_ovn.json";
xmlhttp.open("GET",url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data);
        var backcountrycampers = data.map(function(elem) {
            return elem.backcountrycampers;
        });
        //console.log(months)
        var concessionercampers = data.map(function(elem) {
            return elem.concessionercampers;
        });
        var concessionerlodgers = data.map(function(elem) {
            return elem.concessionerlodgers;
        });
        var miscellaneouscampers = data.map(function(elem) {
            return elem.miscellaneouscampers;
        });
        var rvcampers = data.map(function(elem) {
            return elem.rvcampers;
        });
        var tentcampers = data.map(function(elem) {
            return elem.tentcampers;
        });
        var year = data.map(function(elem) {
            return elem.year;
        });

        var ctx = document.getElementById('canvas').getContext('2d');
        var myChart = new Chart (ctx, {
            type: 'bar',
            data: {
                labels: year,
                datasets: [{
                    label: 'Concessioner',
                    data: concessionercampers,
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    borderWidth: 4
                },
                {
                    label: 'Backcountry',
                    data: backcountrycampers,
                    backgroundColor: 'transparent',
                    borderColor: 'gray',
                    borderWidth: 4
                },
                {
                    label: 'Lodgers',
                    data: concessionerlodgers,
                    backgroundColor: 'transparent',
                    borderColor: 'blue',
                    borderWidth: 4
                },
                {
                    label: 'Misc. Campers',
                    data: miscellaneouscampers,
                    backgroundColor: 'transparent',
                    borderColor: 'green',
                    borderWidth: 4
                },
                {
                    label: 'RV',
                    data: rvcampers,
                    backgroundColor: 'transparent',
                    borderColor: 'purple',
                    borderWidth: 4
                },
                {
                    label: 'Tent',
                    data: tentcampers,
                    backgroundColor: 'transparent',
                    borderColor: 'orange',
                    borderWidth: 4
                },
            ]
            },
            options: {
                elements: {
                    line: {
                        tension:0
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:  true
                        }
                    }]
                }
            }

        })
    }
}




// Kirsten code that is not working below! 

console.log('here1');
main();
let yearOne = 1904;

function getRecreationData(){
    const url = "./../API_Data/lodge_ovn.json"; 
    console.log('here')
    let returnValue = null;
    d3.json(url).then(data=> {
        let yearOVNList = [];
        let itr = 0;

        //create a list of years
        for(itr; itr < data.length;itr++){
            yearOVNList.push(data[itr].year);
        }

        //create first dropdown
        let yrOVNDiv = document.getElementById("yearOVNDropDown");
        let selectListYrOVN = document.createElement("select");
        selectListYrOVN.setAttribute("id", "yrOVNDropDown");
        selectListYrOVN.setAttribute("onchange","yrOVNOnChange(this.value)")

        //Add label to dropdown
        let yrOVNlabel = document.createElement("label");
        yrOVNlabel.setAttribute("for","yearOVNDropDown");
        yrOVNlabel.innerHTML = "Select a year: ";
        yrOVNDiv.appendChild(yrOVNlabel);
        yrOVNDiv.appendChild(selectListYrOVN);

        //Create and append the options
        for (let i = 0; i < yearOVNList.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", yearOVNList[i]);
            if(i==0){
                option.setAttribute("selected", "selected");
            }
            option.text = yearOVNList[i];
            selectListYrOVN.appendChild(option);
        }

        // Create and append the options
        for (let i = 0; i < yearOVNList.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", yearOVNList[i]);
            if(i==0){
                option.setAttribute("selected", "selected");
            }
            option.text = yearOVNList[i];
            selectListYrTwo.appendChild(option);
        }

    })
}

// function yrOVNOnChange(year){
//     console.log("Here1: ", year);
//     if(yearTwo < year){
//         alert('please enter a year before the other year');
//     }else{
//         yearOne = year;
//         createbarGraph(yearOne, yearTwo);
//     }
// }


function main(){
    getRecreationData();
}




