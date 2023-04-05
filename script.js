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

// Parse the Data
d3.csv("test_data.csv").then(function(data) {
data.forEach(function (d) {
    d["start_location_number"] = +d["start_location_number"];
        d["end_location_number"] = +d["end_location_number"];
      });

// sort data
data.sort(function(b, a) {
  return a.end_location_number - b.end_location_number;
});
console.log(data)

// Add X axis
const x = d3.scaleLinear()
  .domain([0, 4])
  .range([ 0, width]);
svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .remove()
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

// Y axis
  const y = d3.scaleBand()
  .range([ 0, height ])
  .domain(data.map(function(d) { return d.end_location_number; }))
  .padding(1);
svg.append("g")
  .call(d3.axisLeft(y))
  .remove()

  const myColor = d3.scaleOrdinal()
    .domain(["A", "B","C", "D"])
    .range(d3.schemeSet1);
// Circles -> start at X=0
svg.selectAll("mycircle")
  .data(data)
  .join("circle")
    // .attr("cx", function(d) { return x(d.start_location_number); } )
    .attr("cx", 1)
    .attr("cy", 4)
    .attr("r", "7")
    .style("fill", d => myColor(d.end_location))
  
// perhaps add elements of beeswarm so that the points are not fully overlapping each other



// Change the X coordinates of line and circle
svg.selectAll("circle")
  .transition()
  .delay(function(d,i){ return 1000*i; }) 
  .duration(3000)
  .attr("cx", function(d) { return x(d.end_location_number); })
  .attr("cy", 100)

  
  

 
})