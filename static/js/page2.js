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

        //Create and append the options
        // for (let i = 0; i < yearOVNList.length; i++) {
        //     let option = document.createElement("option");
        //     option.setAttribute("value", yearOVNList[i]);
        //     if(i==0){
        //         option.setAttribute("selected", "selected");
        //     }
        //     option.text = yearOVNList[i];
        //     selectListYrTwo.appendChild(option);
        // }

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
