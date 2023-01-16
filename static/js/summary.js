const url = "./../API_Data/lodge_ovn.json"; 
function plotCharts(aggregateFunction) 
    d3.json(url).then(data => {
        const metrics = [
            "backcountrycampers",
            "concessionercampers",
            "concessionerlodgers",
            "miscellaneouscampers",
            "rvcampers",
            "tentcampers",
            "year",
    ] })
    const traces = metrics.map(metric => ({
        x: data.map(_ => _["year"]),
        y: data.map(_ => _[`${metric}_${aggregateFunction}`]),
        type: "scatter",
        name: toTitleCase(metric)
    }))

    const summaryLinePlotLayout = {
        title: `${aggregateFunctionLabel[aggregateFunction]} of Type of Yellowstone Visitors over the years`,
        xaxis: {
            title: "Year"
        },
        font: {
            color: fontColor,
        },
        paper_bgcolor: backgroundColor,
        plot_bgcolor: backgroundColor
    }

    Plotly.newPlot("summary-line-plot", traces, summaryLinePlotLayout, {responsive: true})

    const campertypeLinePlotTrace = [{
        x: data.map(_ => _["year"]),
        y: data.map(_ => _[`backcountrycampers${aggregateFunction}`]),
        type: "scatter",
        name: "Backcountry"
    }, {
        x: data.map(_ => _["year"]),
        y: data.map(_ => _[`concessionercampers_${aggregateFunction}`]),
        type: "scatter",
        name: "Concessioner Campers"
    }, {
        x: data.map(_ => _["year"]),
        y: data.map(_ => _[`concessionerlodgers_${aggregateFunction}`]),
        type: "scatter",
        name: "Concessioner Lodgers"
    }, {
        x: data.map(_ => _["year"]),
        y: data.map(_ => _[`miscellaneouscampers_${aggregateFunction}`]),
        type: "scatter",
        name: "Misc."
    }, {
        x: data.map(_ => _["year"]),
        y: data.map(_ => _[`rvcampers_${aggregateFunction}`]),
        type: "scatter",
        name: "RV"
    }, {
        x: data.map(_ => _["year"]),
        y: data.map(_ => _[`tentcampers_${aggregateFunction}`]),
        type: "scatter",
        name: "Tent"
    
    }]

    function handleChange(event) {
        const aggregateFunction = event.target.value
        plotCharts(aggregateFunction)
    }
    
    (() => {
        plotCharts("mean")
    })()
    
    function DrawBubblePlot(url){
    
        d3.json(url).then(data=> {
            
            


            let samples = data.samples;
            let resultArray = metrics.filter(s => s.id == sampleId);
            let result = resultArray[0]
    
            let lodge_sum= sum.metrics;
            let otu_labels= result.otu_labels;
            let sample_values = result.sample_values;
    
            let bubbleData = {
                x: lodge_sum,
                y: sample_values,
                text: otu_labels,
                mode: "markers",
                marker: {
                    size: sample_values,
                    color: otu_ids,
                    colorscale: "Earth"
                }
                
            };
    
            let bubbleArray = [bubbleData];
    
            let bubbleLayout = {
                title: "Bacteria Cultures Per Sample",
                margin: {t: 30},
                hovermode: "closest",
                xaxis: {title: "OTU ID"}
            };
    
            Plotly.newPlot("bubble", bubbleArray, bubbleLayout);
    
        });
    
    };
    function ShowMetadata(sampleId) {

        d3.json(url).then(data => {
    
            let metadata = data.metadata;
            let resultArray = metadata.filter(s => s.id == sampleId);
            let result = resultArray[0];
    
            let display = d3.select("#sample-metadata");
            display.html("");
    
            Object.entries(result).forEach(([key,value])=> {
                display.append("h6").text(`${key}: ${value}`);
            });    
    
        });
    
    };
    
    function optionChanged(sampleId) {
    
        DrawBargraph(sampleId);
        DrawBubblePlot(sampleId);
        ShowMetadata(sampleId);
    
    };
    
    function InitDashboard ()
    {
        let selector=d3.select("#selDataset");
    
        d3.json(url).then(data=> {
        
            let sampleNames = data.names;
            for (let i=0; i<sampleNames.length; i++) {
    
                let sampleId=sampleNames[i];
    
                selector.append("option").text(sampleId).property("value", sampleId);
            };
    
            let initialId = selector.property("value");
    
            DrawBargraph(initialId);
    
            DrawBubblePlot(initialId);
    
            ShowMetadata(initialId);
        });
    };
    InitDashboard();