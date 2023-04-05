// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 40, left: 100},
    width = 460 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          `translate(${margin.left}, ${margin.top})`);


// test

d3.csv("test_data.csv").then(function (data) {


    // for every record, format our numbers as numbers for these columns
data.forEach(function (d) {
    d["start_location_number"] = +d["start_location_number"];
        d["end_location_number"] = +d["end_location_number"];
      });


    // sort
    data.sort(function (a, b) { return b.end_location_number - a.end_location_number; })


    console.log(data);

    /*
    BEGIN BY DEFINING THE DIMENSIONS OF THE SVG and CREATING THE SVG CANVAS
    */
    // var width = document.querySelector("#chart").clientWidth;
    // var height = document.querySelector("#chart").clientHeight;
    // var svg = d3.select("#chart")
    //     .append("svg")
    //     .attr("width", width)
    //     .attr("height", height);

    // // create some margins
    // var margin = { left: 100, right: 100 };

    // store the extent (min/max) for vars that we wannt to use
   
    var xExtent = d3.extent(data, function (d) { return +d.end_location_number; });

    /*
    CREATE SOME SCALES
    */
   
    const myColor = d3.scaleOrdinal()
        .domain(["A", "B","C", "D"])
        .range(d3.schemeSet1);

    var xScale = d3.scaleLinear()
        .domain(xExtent)
        .range([margin.left, width - margin.right]);

    console.log(xScale.domain())

    var yScale = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d.start_location_number; }))
    //  .padding(1);


    /*
    DRAW THE AXES
    */
    svg.append("g")
        .attr("transform", `translate(0,${height - 100})`)
        .call(d3.axisBottom(xScale))
        .remove();

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale))
        .remove();

    // CENTER SIMULATION OPTION
    // var simulation = d3.forceSimulation(data)
    //     .force('charge', d3.forceManyBody().strength(0)) // send nodes away from eachother
    //     .force('center', d3.forceCenter(width / 2, height / 2)) // pull nodes to a central point
    //     .force('collision', d3.forceCollide().radius(function (d) { // prevent circle overlap when collide
    //         return rScale(d.Cocoa_Percent);
    //     }).strength(1))
    //     .on('tick', ticked);


    // GROUPED SIMULATION
    var simulation = d3.forceSimulation(data)
        .force('x', d3.forceX().x(function (d) {
            return xScale(+d.end_location_number);
        }).strength(0.1))
        .force('y', d3.forceY().y(100).strength(0.4))
        // .force('y', d3.forceY().y(function (d) {
        //     return height / 2;
        // }).strength(0.8))
        .force('collision', d3.forceCollide().radius(function (d) { // prevent circle overlap when collide
            return 2;
        }).strength(0.1))
        // .force('charge', d3.forceManyBody().strength(-5)) // send nodes away from eachother
        .on('tick', ticked)
        .velocityDecay(0.7);

    /* 
    ADD TOOLTIP
    The visualization gets too cluttered if we try to add text labels;
    use a tooltip instead
    */
    var tooltip = d3.select("#my_dataviz")
        .append("div")
        .attr("class", "tooltip");


    function ticked() {
        var u = svg
            .selectAll('circle')
            .data(data)
            .join('circle')
            .attr('r', function (d) {
                return 3;
            })
            .attr('fill', function (d) {
                return myColor(d.end_location);
            })
            .attr('cx', function (d) {
                return d.x;
            })
            .attr('cy', function (d) {
                return d.y
            }).on('mouseover', function (event, d) {

                tooltip.style("visibility", "visible")
                    .style("left", event.offsetX + "px")
                    .style("top", event.offsetY + "px")
                    .html("<h4>" + d.person );

                d3.select(this).attr("stroke", "#000000").attr("stroke-width", 3)

            }).on('mouseout', function (event, d) {
                tooltip.style("visibility", "hidden")

                d3.selectAll('circle').attr("stroke", null)
            });
    }
});







// // Parse the Data
// d3.csv("test_data.csv").then(function(data) {
// data.forEach(function (d) {
//     d["start_location_number"] = +d["start_location_number"];
//         d["end_location_number"] = +d["end_location_number"];
//       });

// // sort data
// data.sort(function(b, a) {
//   return a.end_location_number - b.end_location_number;
// });
// console.log(data)

// // Add X axis
// const x = d3.scaleLinear()
//   .domain([0, 4])
//   .range([ 0, width]);
// svg.append("g")
//   .attr("transform", `translate(0, ${height})`)
//   .call(d3.axisBottom(x))
//   .remove()
//   .selectAll("text")
//   .attr("transform", "translate(-10,0)rotate(-45)")
//   .style("text-anchor", "end");

// // Y axis
//   const y = d3.scaleBand()
//   .range([ 0, height ])
//   .domain(data.map(function(d) { return d.end_location_number; }))
//   .padding(1);
// svg.append("g")
//   .call(d3.axisLeft(y))
//   .remove()

//   const myColor = d3.scaleOrdinal()
//     .domain(["A", "B","C", "D"])
//     .range(d3.schemeSet1);
// // Circles -> start at X=0
// svg.selectAll("mycircle")
//   .data(data)
//   .join("circle")
//     // .attr("cx", function(d) { return x(d.start_location_number); } )
//     .attr("cx", 1)
//     .attr("cy", 4)
//     .attr("r", "7")
//     .style("fill", d => myColor(d.end_location))

//     // testin
// let simulation = d3.forceSimulation(data)
//     .force("x", d3.forceX(function(d) {
//         return x(d.end_location_number);
//     }).strength(2))
//     .force("y", d3.forceY((height / 2) - margin.bottom / 2))
//     .force("collide", d3.forceCollide(9))
//     .stop();

// // Manually run simulation
// for (let i = 0; i < data.length; ++i) {
//     simulation.tick(10);
// }

  
// // perhaps add elements of beeswarm so that the points are not fully overlapping each other

// // labels for groups not working rn - do this later
// // Features of the annotation
// // const annotations = [
// //     {
// //       note: {
// //         label: "Here is the annotation label",
// //         title: "Annotation title",
// //         align: "middle",  // try right or left
// //         wrap: 200,  // try something smaller to see text split in several lines
// //         padding: 10   // More = text lower
// //       },
// //       color: ["#69b3a2"],
// //       x: 160,
// //       y: 160,
// //       dy: 100,
// //       dx: 100
// //     }
// //   ]
  
// //   // Add annotation to the chart
// //   const makeAnnotations = d3.annotation()
// //     .annotations(annotations)
// //   d3.select("#my_dataviz")
// //     .append("svg")
// //     .call(makeAnnotations)

// // Change the X coordinates of line and circle
// svg.selectAll("circle")
//   .transition()
//   .delay(function(d,i){ return 1000*i; }) 
//   .duration(3000)
//   .attr("cx", function(d) { return x(d.end_location_number); })
//   .attr("cy", 100)

  
  

 
// })