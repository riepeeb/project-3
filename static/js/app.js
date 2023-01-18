
// Adding in bar chart
var url = "http://127.0.0.1:5000//API_Data/sum_visitors_static.json"
d3.json(url).then(data => {
    console.log(data)
    let year = data.map(_=> _["year"])
    let recreationvisitors = data.map(_=> _["recreationvisitors"])

// function init() {
    let traces =[{
        y: recreationvisitors,
        x: year,
        type: "bar"
    }]

    let layout = {
        height: 600,
        width: 800
    };
    Plotly.newPlot("bar", traces, layout);
})


//Kirsten's Code
// console.log('here0');
// main();
// let yearOne = 1904;
// let yearTwo = 1904;

// function getVisitorData(){
//     const url = "./../API_Data/yr_visitors.json"; 
//     console.log('here')
//     let returnValue = null;
//     d3.json(url).then(data=> {
//         let yearList = [];
//         let itr = 0;

//         //create a list of years
//         for(itr; itr < data.length;itr++){
//             yearList.push(data[itr].year);
//         }

//         //create first dropdown
//         let yrOneDiv = document.getElementById("yearDropDownOne");
//         let selectListYrOne = document.createElement("select");
//         selectListYrOne.setAttribute("id", "yrOneDropDown");
//         selectListYrOne.setAttribute("onchange","yrOneOnChange(this.value)")

//         //Add label to dropdown
//         let yrOnelabel = document.createElement("label");
//         yrOnelabel.setAttribute("for","yearDropDownOne");
//         yrOnelabel.innerHTML = "Select a beginning year: ";
//         yrOneDiv.appendChild(yrOnelabel);
//         yrOneDiv.appendChild(selectListYrOne);

//         //Create and append the options
//         for (let i = 0; i < yearList.length; i++) {
//             let option = document.createElement("option");
//             option.setAttribute("value", yearList[i]);
//             if(i==0){
//                 option.setAttribute("selected", "selected");
//             }
//             option.text = yearList[i];
//             selectListYrOne.appendChild(option);
//         }


//         //create second dropdown
//         let yrTwoDiv = document.getElementById("yearDropDownTwo");
//         let selectListYrTwo = document.createElement("select");
//         selectListYrTwo.setAttribute("id", "yrTwoDropDown");
//         selectListYrTwo.setAttribute("onchange","yrTwoOnChange(this.value)")
        
//         //add label to dropdown 
//         let yrTwoLabel = document.createElement("label");
//         yrTwoLabel.setAttribute("for","yearDropDownOne");
//         yrTwoLabel.innerHTML = "Select an end year: ";
//         yrTwoDiv.appendChild(yrTwoLabel);
//         yrTwoDiv.appendChild(selectListYrTwo);

//         //Create and append the options
//         for (let i = 0; i < yearList.length; i++) {
//             let option = document.createElement("option");
//             option.setAttribute("value", yearList[i]);
//             if(i==0){
//                 option.setAttribute("selected", "selected");
//             }
//             option.text = yearList[i];
//             selectListYrTwo.appendChild(option);
//         }

//     })
// }

// function yrOneOnChange(year){
//     console.log("Here1: ", year);
//     if(yearTwo < year){
//         alert('please enter a year before the other year');
//     }else{
//         yearOne = year;
//         createbarGraph(yearOne, yearTwo);
//     }
// }

// function yrTwoOnChange(year){
//     console.log("Here2: ", year);
//     if(year < yearOne){
//         alert('please enter a year after the other year');
//     }else{
//         yearTwo = year;
//         createbarGraph(yearOne, yearTwo);
//     }

// }

// function main(){
//     getVisitorData();
// }

