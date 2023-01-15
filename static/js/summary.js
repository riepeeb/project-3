// Bubble Plot
function DrawBubblePlot(sampleId) {
    
    d3.json(url).then(data=> {

        let samples = data.samples;
        let resultArray = samples.filter(s => s.id == sampleId);
        let result = resultArray[0]

        let otu_ids = result.otu_ids;
        let otu_labels= result.otu_labels;
        let sample_values = result.sample_values;

        let bubbleData = {
            x: otu_ids,
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
