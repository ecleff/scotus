// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 40, left: 100},
    width = 1000 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

// // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width)
        .attr("height", height);


// Test Networks - WORKS
// d3.json("test.json").then(function (data) {
// // Assuming your JSON object is stored in a variable called "graph"
// var nodes = data.nodes;
// var links = [];

// // Loop through the nodes to find relationships between them
// for (var i = 0; i < nodes.length; i++) {
//   for (var j = i + 1; j < nodes.length; j++) {
//     // Check if there is a relationship between nodes[i] and nodes[j]
//     // For example, you could define a relationship as having the same "end_location" value
//     if (nodes[i].end_location === nodes[j].end_location) {
//       // Add a link to the "links" array
//       links.push({source: i, target: j});
//     }
//   }
// }

// // Add the "links" array to the JSON object
// data.links = links;

// console.log(data.nodes)
// console.log(data.links)

// //     MAKE SOME SCALES
// //     */

//     var zones = data.nodes.map(function (d) { return d.end_location; })
//     let uniqueZones = [...new Set(zones)];

// var colorScale = d3.scaleOrdinal()
//         .domain(uniqueZones)
//         .range(d3.schemeTableau10);
//     console.log(uniqueZones)



// //     /* 
// //     INITIALIZE FORCE SIMULATION 
// //     Find a layout that you like by tweaking the parameters. 
// //     For a useful tool, see:
// //     https://bl.ocks.org/steveharoz/8c3e2524079a8c440df60c1ab72b5d03
// //     */
//     var simulation = d3.forceSimulation(data.nodes)
//         // .force("link", d3.forceLink(data.links).id(function (d) { return d.index;}).distance(2).strength(0.4))
//         .force("x", d3.forceX(40).strength(0.4).x(d => {
//     if (d.end_location_number === 1) {
//         return width * 0.2;
//     } else if (d.end_location_number === 2) {
//         return width * 0.4;
//     } else if (d.end_location_number === 3) {
//         return width * 0.6;
//     } else {
//         return width * 0.8;
//     }
// }))
//   .force("y", d3.forceY(50).strength(0.3).y(300))
//         // .force("center", d3.forceCenter(width / 2, height / 2))
//         // .force("charge", d3.forceManyBody().strength(5))
//         .force("collide", d3.forceCollide().radius(10).strength(0.5))
//         // .alpha(.0005)
// 		.velocityDecay(0.9);



// //     /* 
// //     DRAW THE CIRCLES FOR THE NODES
// //     Why do we draw these after the links?
// //     */
//     var node = svg.append("g")
//         .selectAll("circle")
//         .data(data.nodes)
//         .enter()
//         .append("circle")
//         .attr("stroke", "#fff")
//         .attr("stroke-width", 0.5)
//         .attr("r", 8)
//         .attr("fill", function (d) {
//             return colorScale(d.end_location)
//         })

// //     /* 
// //     MAKE A LEGEND
// //     */
// //     // create a group for our legend
//     var legend = svg.append("g")
//         .attr("class", "legend")
//         .attr("width", 200)
//         .attr("height", 400)
//         .attr("transform", `translate(50,50)`);

//     // add a legend title
//     legend.append("text")
//         .attr("x", 10)
//         .attr("y", 0)
//         .text("End location")

//     // for each color in our domain, add a dot and label
//     colorScale.domain().forEach((d, i) => {
//         legend.append("circle")
//             .attr("cx", 10)
//             .attr("cy", ((i + 1) * 20) - 5)
//             .attr("r", 5)
//             .attr("fill", colorScale(d));

//         legend.append("text")
//             .attr("x", 20)
//             .attr("y", (i + 1) * 20)
//             .text(d);
//     })

// //     /* 
// //     TICK THE SIMULATION 
// //     Each time the simulation iterates ("ticks"), we will
// //     update the positions of the nodes (circles) and links (lines)
// //     in the network
// //     */

//     simulation.on("tick", function () {

//         node
//             .attr("cx", function (d) { return d.x; })
//             .attr("cy", function (d) { return d.y; });

//     });

// //     /* ADD A TOOLTIP */
//     var tooltip = d3.select("#my_dataviz")
//         .append("div")
//         .attr("class", "tooltip");

//     node.on("mouseover", function (e, d) {
//         var cx = d.x + 20;
//         var cy = d.y - 10;
//         console.log(d)

//         tooltip.style("visibility", "visible")
//             .style("left", cx + "px")
//             .style("top", cy + "px")
//             .text(d.character);

//     }).on("mouseout", function () {
//         tooltip.style("visibility", "hidden");
//     });

// })
  
 
  
//     function ticked() {
//       node.attr("cx", function(d) { return d.x; })
//           .attr("cy", function(d) { return d.y; });
  
//     //   link.attr("x1", function(d) { return d.source.x; })
//     //       .attr("y1", function(d) { return d.source.y; })
//     //       .attr("x2", function(d) { return d.target.x; })
//     //       .attr("y2", function(d) { return d.target.y; });
//     }
    





// test 4  - working now but basically the same as the one above


// d3.json("test.json").then(function (data) {
// // Assuming your JSON object is stored in a variable called "graph"
// var nodes = data.nodes;
// var links = [];

// // Loop through the nodes to find relationships between them
// for (var i = 0; i < nodes.length; i++) {
//   for (var j = i + 1; j < nodes.length; j++) {
//     // Check if there is a relationship between nodes[i] and nodes[j]
//     // For example, you could define a relationship as having the same "end_location" value
//     if (nodes[i].end_location === nodes[j].end_location) {
//       // Add a link to the "links" array
//       links.push({source: i, target: j});
//     }
//   }
// }

// // Add the "links" array to the JSON object
// data.links = links;

// console.log(data.nodes)
// console.log(data.links)

// //     MAKE SOME SCALES
// //     */

// var zones = data.nodes.map(function (d) { return d.end_location; })
//     let uniqueZones = [...new Set(zones)];

// var colorScale = d3.scaleOrdinal()
//         .domain(uniqueZones)
//         .range(d3.schemeTableau10);
//     console.log(uniqueZones)

// var node = svg.append("g")
//         .selectAll("circle")
//         .data(data.nodes)
//         .enter()
//         .append("circle")
//         .attr("stroke", "#fff")
//         .attr("stroke-width", 0.5)
//         .attr("r", 8)
//         .attr("fill", function (d) {
//             return colorScale(d.end_location)
//         })

// // //     /* ADD A TOOLTIP */
// var tooltip = d3.select("#my_dataviz")
// .append("div")
// .attr("class", "tooltip");

// node.on("mouseover", function (e, d) {
// var cx = d.x + 20;
// var cy = d.y - 10;
// console.log(d)

// tooltip.style("visibility", "visible")
//     .style("left", cx + "px")
//     .style("top", cy + "px")
//     .text(d.person);

// }).on("mouseout", function () {
// tooltip.style("visibility", "hidden");
// });

// //     /* 
// //     INITIALIZE FORCE SIMULATION 
// //     Find a layout that you like by tweaking the parameters. 
// //     For a useful tool, see:
// //     https://bl.ocks.org/steveharoz/8c3e2524079a8c440df60c1ab72b5d03
// //     */
// const simulation = d3.forceSimulation(nodes)
// // .force("x", d3.forceX(40).strength(0.4).x(100))
// //   .force("y", d3.forceY(50).strength(0.3).y(100))
//   .velocityDecay(0.95)
//   .alphaTarget(0.000001)
//   .alphaDecay(0);

// simulation.on("tick", () => {
//     if (simulation.alpha() < 0.05) {
//       simulation.alphaTarget(0.3).alphaDecay(0.0001);
//     } else {
//       simulation.alphaTarget(0.3).alphaDecay(0.00001);
//     }
//     // update node positions here
// function moveToClusters() {
//         simulation
//                 .force("x", d3.forceX(40).strength(0.4).x(d => {
//     if (d.end_location_number === 1) {
//         return width * 0.2;
//     } else if (d.end_location_number === 2) {
//         return width * 0.4;
//     } else if (d.end_location_number === 3) {
//         return width * 0.6;
//     } else {
//         return width * 0.8;
//     }
// }))
//   .force("y", d3.forceY(50).strength(0.3).y(300))
//         // .force("center", d3.forceCenter(width / 2, height / 2))
//         // .force("charge", d3.forceManyBody().strength(5))
//         .force("collide", d3.forceCollide(13).radius(10).strength(0.6))
//         .alpha(.05)
//         .alphaDecay(0.000005)
// 		.velocityDecay(0.8);
//         // .force("x", d3.forceX(40).strength(0.4).x(d => {
//         //     if (d.end_location_number === 1) {
//         //         return width * 0.2;
//         //     } else if (d.end_location_number === 2) {
//         //         return width * 0.4;
//         //     } else if (d.end_location_number === 3) {
//         //         return width * 0.6;
//         //     } else {
//         //         return width * 0.8;
//         //     }
//         //   }))
//         //   .force("y", d3.forceY(50).strength(0.6).y(300))
//         //     // .force("center", d3.forceCenter(width / 2, height / 2))
//         //  .force("collide", d3.forceCollide().radius(10).strength(0.4))
//         //  .velocityDecay(0.99)
//         //   .alphaTarget(0.3)
//         //   .alphaDecay(0.000001)
//         //   .restart();
//       }


    
    
// function ticked() {
//     moveToClusters();
//     node
//       .attr("cx", (d) => d.x)
//       .attr("cy", (d) => d.y);
//   }
//     simulation.on("tick", ticked);
      
//   });

// //   function clusterX(cluster) {
// //     switch (cluster) {
// //       case 0:
// //         return width / 4;
// //       case 1:
// //         return (3 * width) / 4;
// //       case 2:
// //         return width / 4;
// //       case 3:
// //         return (3 * width) / 4;
// //     }
// //   }
  
// //   function clusterY(cluster) {
// //     switch (cluster) {
// //       case 0:
// //         return height / 4;
// //       case 1:
// //         return height / 4;
// //       case 2:
// //         return (3 * height) / 4;
// //       case 3:
// //         return (3 * height) / 4;
// //     }
// //   }





// })


// Test w/ real data

d3.json("thomas_ppl.json").then(function (data) {
    // Assuming your JSON object is stored in a variable called "graph"
    var nodes = data.nodes;
    var links = [];
    
    // Loop through the nodes to find relationships between them
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        // Check if there is a relationship between nodes[i] and nodes[j]
        // For example, you could define a relationship as having the same "end_location" value
        if (nodes[i].group === nodes[j].end_group) {
          // Add a link to the "links" array
          links.push({source: i, target: j});
        }
      }
    }
    
    // Add the "links" array to the JSON object
    data.links = links;
    
    console.log(data.nodes)
    console.log(data.links)
    
    //     MAKE SOME SCALES
    //     */
    
    var zones = data.nodes.map(function (d) { return d.group; })
        let uniqueZones = [...new Set(zones)];
    
    var colorScale = d3.scaleOrdinal()
            // .domain(uniqueZones)
            .domain(["Judges","Trump Admin","Private Practice", "Academia", "Solicitors General", "Other"])
            .range(["#361c0e", "#570211", "#7e3110", "#004540", "#032c4d", "#360825"]);
        // console.log(uniqueZones)
    // "Judges","Trump Admin","Private Practice", "Academia", "Solicitors General", "Other"
    var node = svg.append("g")
            .selectAll("circle")
            .data(data.nodes)
            .enter()
            .append("circle")
            // .append("image")
            // .attr("xlink:href", d => d.img)
            .attr("class", function(d) { return "node " + d.class; })
            .attr("stroke", "#fff")
            .attr("stroke-width", 0.5)
            .attr("r", 8)
            .style("opacity", "0.9")
            // .attr("x", 100)
            // .attr("y", 40)
            .attr("fill", function (d) {
                return colorScale(d.group)
            })
            

    // Text labels
    // create a new SVG text element for the node with ID "node1"
var node1Text = svg.append("text")
.attr("class", "nodeText")
.attr("dy", ".35em")
.text("Judges")
.attr("x", 150)
.attr("y", 400);

var node2Text = svg.append("text")
.attr("class", "nodeText")
.attr("dy", ".35em")
.text("Solicitors General")
.attr("x", 270)
.attr("y", 400);

var node3Text = svg.append("text")
.attr("class", "nodeText")
.attr("dy", ".35em")
.text("Private Practice")
.attr("x", 450)
.attr("y", 400);

var node4Text = svg.append("text")
.attr("class", "nodeText")
.attr("dy", ".35em")
.text("Academia")
.attr("x", 580)
.attr("y", 400);
    
var node5Text = svg.append("text")
.attr("class", "nodeText")
.attr("dy", ".35em")
.text("Trump Admin")
.attr("x", 650)
.attr("y", 400);

var node6Text = svg.append("text")
.attr("class", "nodeText")
.attr("dy", ".35em")
.text("Other")
.attr("x", 850)
.attr("y", 400);
    // //     /* ADD A TOOLTIP */
    var tooltip = d3.select("#my_dataviz")
    .append("div")
    .attr("class", "tooltip");
    
    node.on("mouseover", function (e, d) {
    var cx = d.x + 20;
    var cy = d.y - 10;
    console.log(d)
    
    tooltip.style("visibility", "visible")
        .style("left", cx + "px")
        .style("top", cy + "px")
        .style("background-color", "white")
        .style("border", "1px solid black")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .html(`${d.person}<br />
        Field: ${d.group} `
        );
        // .text(d.person);
    
    }).on("mouseout", function () {
    tooltip.style("visibility", "hidden");
    });
    
    //     /* 
    //     INITIALIZE FORCE SIMULATION 
    //     Find a layout that you like by tweaking the parameters. 
    //     For a useful tool, see:
    //     https://bl.ocks.org/steveharoz/8c3e2524079a8c440df60c1ab72b5d03
    //     */
    const simulation = d3.forceSimulation(nodes)
    // .force("x", d3.forceX(40).strength(0.4).x(100))
    //   .force("y", d3.forceY(50).strength(0.3).y(100))
      .velocityDecay(0.95)
      .alphaTarget(0.000001)
      .alphaDecay(0);
    
    simulation.on("tick", () => {
        if (simulation.alpha() < 0.05) {
          simulation.alphaTarget(0.3).alphaDecay(0.0001);
        } else {
          simulation.alphaTarget(0.3).alphaDecay(0.00001);
        }
        // update node positions here
    function moveToClusters() {
        node1Text.attr("x", 150)
            .attr("y", 350)
        node2Text.attr("x", 310)
            .attr("y", 350)
        node3Text.attr("x", 465)
            .attr("y", 400)
        node4Text.attr("x", 580)
            .attr("y", 350)
        node5Text.attr("x", 670)
            .attr("y", 350)
        node6Text.attr("x", 800)
            .attr("y", 350)
        simulation
                    .force("x", d3.forceX(40).strength(0.84).x(d => {
        if (d.end_location_number === 1) {
            return width * 0.2;
        } else if (d.end_location_number === 2) {
            return width * 0.3;
        } else if (d.end_location_number === 3) {
            return width * 0.4;
        } else if (d.end_location_number === 4) {
            return width * 0.47;
        } else if (d.end_location_number === 5) {
            return width * 0.6;
        }else if (d.end_location_number === 6) {
            return width * 0.7;
        }else if (d.end_location_number === 7) {
            return width * 0.8;
        }else {
            return width * 0.9;
        }
    }))
      .force("y", d3.forceY(50).strength(0.2).y(275))
            // .force("center", d3.forceCenter(width / 2, height / 2))
            // .force("charge", d3.forceManyBody().strength(5))
            .force("collide", d3.forceCollide(13).radius(10).strength(0.6))
            .alpha(.05)
            .alphaDecay(0.00005)
            .velocityDecay(0.8);
            // .force("x", d3.forceX(40).strength(0.4).x(d => {
            //     if (d.end_location_number === 1) {
            //         return width * 0.2;
            //     } else if (d.end_location_number === 2) {
            //         return width * 0.4;
            //     } else if (d.end_location_number === 3) {
            //         return width * 0.6;
            //     } else {
            //         return width * 0.8;
            //     }
            //   }))
            //   .force("y", d3.forceY(50).strength(0.6).y(300))
            //     // .force("center", d3.forceCenter(width / 2, height / 2))
            //  .force("collide", d3.forceCollide().radius(10).strength(0.4))
            //  .velocityDecay(0.99)
            //   .alphaTarget(0.3)
            //   .alphaDecay(0.000001)
            //   .restart();
          }
    
    
        
        
    function ticked() {
        moveToClusters();
        node
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y);
      }
        simulation.on("tick", ticked);
          
      });
    // text
//     var node1Text = svg.append("text")
//     .attr("class", "nodeText")
//     .attr("dy", ".35em")
//     .text("This is node 1")
//     .attr("x", 20)
//     .attr("y", 200);
  
//   // update the position of the text element when the node moves
//   force.on("tick", function() {
//     node1Text.attr("x", 20)
//       .attr("y", 200);
//   });





    //   function clusterX(cluster) {
    //     switch (cluster) {
    //       case 0:
    //         return width / 4;
    //       case 1:
    //         return (3 * width) / 4;
    //       case 2:
    //         return width / 4;
    //       case 3:
    //         return (3 * width) / 4;
    //     }
    //   }
      
    //   function clusterY(cluster) {
    //     switch (cluster) {
    //       case 0:
    //         return height / 4;
    //       case 1:
    //         return height / 4;
    //       case 2:
    //         return (3 * height) / 4;
    //       case 3:
    //         return (3 * height) / 4;
    //     }
    //   }


//     // attempting semi circles
//     // Array of names to include
// var includedNames = ["Allison Hartwell Eid*", "James C. Ho*", "Tyler R. Green*","G. Britton Lucas*","Kasdin M. Mitchell*","Gilbert C. Dickey*"];
// svg.selectAll("circle")
//   .data(nodes.filter(function(d) {
//     return includedNames.includes(d.name);
//   }))
//   .enter()
//   .append("circle")
//   .attr("fill-opacity", 0.5);

    })