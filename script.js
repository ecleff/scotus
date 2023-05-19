
// set the dimensions and margins of the graph
const margin = {top: 10, right: 10, bottom: 30, left: 10},
containerWidth = document.getElementById("my_dataviz").clientWidth,
containerHeight= 450 - margin.top - margin.bottom;

console.log(containerWidth)

// calculate the actual width and height of the SVG based on the container
const width = containerWidth - margin.left - margin.right;
const height = containerHeight - margin.top - margin.bottom;


// // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", "100%") // Set the width to 100%
        .attr("height", "100%") // Set the height to 100%
        .attr("viewBox", `0 0 ${containerWidth} ${containerHeight}`) // Set the viewBox to maintain the aspect ratio
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
        // nodeRadius = 20;

// setting up SVG object for judges chapter
  const chapterHeight = 50- margin.top - margin.bottom
  const heightC = chapterHeight - margin.top - margin.bottom
  var judgesSvg = d3.select("#judges_svg")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", `0 0 ${containerWidth} ${chapterHeight}`) // Set the viewBox to maintain the aspect ratio
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
  // var judgesSvg = d3.select("#scroll2")
  // .select("#judges_svg")
  // .append("svg")
  // .attr("width", "100%")
  // .attr("height", "200px")
  // .attr("viewBox", `0 0 ${containerWidth} ${chapterHeight}`) // Set the viewBox to maintain the aspect ratio
  // .append("g")
  // .attr("transform", `translate(${margin.left}, ${margin.top})`);
// setting up SVG object for trump admin chapter
var trumpAdminSvg = d3.select("#trump_admin_svg")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("viewBox", `0 0 ${containerWidth} ${chapterHeight}`) // Set the viewBox to maintain the aspect ratio
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


  // setting up SVG object for sol gen chapter
var solGenSvg = d3.select("#sol_gen_svg")
.append("svg")
.attr("width", "100%")
.attr("height", "100%")
.attr("viewBox", `0 0 ${containerWidth} ${chapterHeight}`) // Set the viewBox to maintain the aspect ratio
.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);


// setting up SVG object for private practice chapter

var privatePracticeSvg = d3.select("#private_practice_svg")
.append("svg")
.attr("width", "100%")
.attr("height", "100%")
.attr("viewBox", `0 0 ${containerWidth} ${chapterHeight}`) // Set the viewBox to maintain the aspect ratio
.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

// setting up SVG object for academia chapter
var academiaSvg = d3.select("#academia_svg")
.append("svg")
.attr("width", "100%")
.attr("height", "100%")
.attr("viewBox", `0 0 ${containerWidth} ${chapterHeight}`) // Set the viewBox to maintain the aspect ratio
.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

// setting up SVG object for outliers chapter
var otherSvg = d3.select("#other_svg")
.append("svg")
.attr("width", "100%")
.attr("height", "100%")
.attr("viewBox", `0 0 ${containerWidth} ${chapterHeight}`) // Set the viewBox to maintain the aspect ratio
.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);
// initializing scrollama
const scroller = scrollama();// using d3 for convenience, and storing a selected elements

// Get the button element using its ID
// Get all the buttons using their IDs
var judgesButton = document.getElementById("judges-button");
var trumpAdminButton = document.getElementById("trump-admin-button");
var privatePracticeButton = document.getElementById("private-practice-button");
var academiaButton = document.getElementById("academia-button");
var solGenButton = document.getElementById("sol-gen-button");
var otherButton = document.getElementById("other-button");


// Set the initial border style for all buttons
// Set the initial style for all buttons
var buttons = [
  { element: judgesButton, color: "#f94144" },
  { element: trumpAdminButton, color: "#f3722c" },
  { element: privatePracticeButton, color: "#90be6d" },
  { element: academiaButton, color: "#43aa8b" },
  { element: solGenButton, color: "#f9c74f" },
  { element: otherButton, color: "#577590" }
];

buttons.forEach(function(button) {
  button.element.style.borderBottom = "3px solid " + button.color;
  button.element.style.textDecoration = "none";
  button.element.style.fontWeight = "normal";
  button.element.style.backgroundColor = "#d1d6db";
});
// Add click event listeners to all buttons
judgesButton.addEventListener("click", function() {
  setButtonColors(judgesButton);
})

window.addEventListener("scroll", function() {
  // Get the section element that the button links to
  const section = document.querySelector("#judges-chapter");

  // Get the position of the section relative to the viewport
  const sectionPosition = section.getBoundingClientRect();

  // Check if the section is in the viewport
  if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
    setButtonColors(judgesButton);
  }
});

trumpAdminButton.addEventListener("click", function() {
  setButtonColors(trumpAdminButton);
});
window.addEventListener("scroll", function() {
  // Get the section element that the button links to
  const section = document.querySelector("#trump-admin-chapter");

  // Get the position of the section relative to the viewport
  const sectionPosition = section.getBoundingClientRect();

  // Check if the section is in the viewport
  if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
    setButtonColors(trumpAdminButton);
  }
});

privatePracticeButton.addEventListener("click", function() {
  setButtonColors(privatePracticeButton);
});

window.addEventListener("scroll", function() {
  // Get the section element that the button links to
  const section = document.querySelector("#private-practice-chapter");

  // Get the position of the section relative to the viewport
  const sectionPosition = section.getBoundingClientRect();

  // Check if the section is in the viewport
  if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
    setButtonColors(privatePracticeButton);
  }
});

academiaButton.addEventListener("click", function() {
  setButtonColors(academiaButton);
});
window.addEventListener("scroll", function() {
  // Get the section element that the button links to
  const section = document.querySelector("#academia-chapter");

  // Get the position of the section relative to the viewport
  const sectionPosition = section.getBoundingClientRect();

  // Check if the section is in the viewport
  if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
    setButtonColors(academiaButton);
  }
});

solGenButton.addEventListener("click", function() {
  setButtonColors(solGenButton);
});

window.addEventListener("scroll", function() {
  // Get the section element that the button links to
  const section = document.querySelector("#sol-gen-chapter");

  // Get the position of the section relative to the viewport
  const sectionPosition = section.getBoundingClientRect();

  // Check if the section is in the viewport
  if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
    setButtonColors(solGenButton);
  }
});


otherButton.addEventListener("click", function() {
  setButtonColors(otherButton);
});

window.addEventListener("scroll", function() {
  // Get the section element that the button links to
  const section = document.querySelector("#other-chapter");

  // Get the position of the section relative to the viewport
  const sectionPosition = section.getBoundingClientRect();

  // Check if the section is in the viewport
  if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
    setButtonColors(otherButton);
  }
});

// Loop through the buttons array











// Function to set the colors of all buttons
function setButtonColors(clickedButton) {
  var buttons = [
    judgesButton,
    trumpAdminButton,
    privatePracticeButton,
    academiaButton,
    solGenButton,
    otherButton
  ];

  buttons.forEach(function(button) {
    // Set the borderBottom color for all buttons
    // button.style.borderBottom = "2px solid red"; // Replace #000000 with your desired color
    button.style.textDecoration = "none";
    button.style.fontWeight = "normal";
    button.style.backgroundColor = "#d1d6db";
  });

  // Change the style for the clicked button
  clickedButton.style.textDecoration = "underline";
  clickedButton.style.backgroundColor = "#c6cdd2";
  clickedButton.style.fontWeight = "bold";
}






// Add an event listener to all scroll buttons
var scrollButtons = document.querySelectorAll('.scroll-btn');
scrollButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove active class from all scroll buttons
    scrollButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    // Add active class to clicked button
    button.classList.add('active');
  });
});


// chapter blocks
const chapterBlocks = document.querySelectorAll('.chapter_block');

// var judgesButton = document.getElementById("judges-button");
// var trumpButton = document.getElementById("trump-admin-button");
// var privatepracticeButton = document.getElementById("private-practice-button");
// var academiaButton = document.getElementById("academia-button");
// var solgenButton = document.getElementById("sol-gen-button");
// var otherButton = document.getElementById("other-button");

// // Add an event listener to the button
// judgesButton.addEventListener("click", function() {
//   // Change the background color of the button when it is clicked
//   judgesButton.style.backgroundColor = "red";
// });
   
// trumpButton.addEventListener("click", function() {
//   // Change the background color of the button when it is clicked
//   trumpButton.style.backgroundColor = "red";
// });

// privatepracticeButton.addEventListener("click", function() {
//   // Change the background color of the button when it is clicked
//   privatepracticeButton.style.backgroundColor = "red";
// });

// academiaButton.addEventListener("click", function() {
//   // Change the background color of the button when it is clicked
//   academiaButton.style.backgroundColor = "red";
// });

// solgenButton.addEventListener("click", function() {
//   // Change the background color of the button when it is clicked
//   solgenButton.style.backgroundColor = "red";
// });

// otherButton.addEventListener("click", function() {
//   // Change the background color of the button when it is clicked
//   otherButton.style.backgroundColor = "red";
// });

// using d3 for convenience, and storing a selected elements
// var $container = d3.select('#scroll');
// var $graphic = container.select('.scroll__graphic');
// var $chart = graphic.select('.my_dataviz');
// var $text = container.select('.scroll__text');
// var $step = text.selectAll('.step');

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




// // Test w/ real data - this works as blobs

// d3.json("thomas_ppl.json").then(function (data) {
//     // Assuming your JSON object is stored in a variable called "graph"
//     var nodes = data.nodes;
//     var links = [];
    
//     // Loop through the nodes to find relationships between them
//     for (var i = 0; i < nodes.length; i++) {
//       for (var j = i + 1; j < nodes.length; j++) {
//         // Check if there is a relationship between nodes[i] and nodes[j]
//         // For example, you could define a relationship as having the same "end_location" value
//         if (nodes[i].group === nodes[j].end_group) {
//           // Add a link to the "links" array
//           links.push({source: i, target: j});
//         }
//       }
//     }
    
//     // Add the "links" array to the JSON object
//     data.links = links;
    
//     console.log(data.nodes)
//     console.log(data.links)
    
//     //     MAKE SOME SCALES
//     //     */
//     var nodeRadius = 20;
    
//     var zones = data.nodes.map(function (d) { return d.group; })
//         let uniqueZones = [...new Set(zones)];
    
//     var colorScale = d3.scaleOrdinal()
//             // .domain(uniqueZones)
//             .domain(["Judges","Trump Admin","Private Practice", "Academia", "Solicitors General", "Other"])
//             .range(["#361c0e", "#570211", "#7e3110", "#004540", "#032c4d", "#360825"]);
//         // console.log(uniqueZones)
//     // "Judges","Trump Admin","Private Practice", "Academia", "Solicitors General", "Other"
//     var node = svg.append("g")
//             .selectAll("circle")
//             .data(data.nodes)
//             .enter()
//             .append("circle")
//             // .append("image")
//             // .attr("xlink:href", d => d.img)
//             .attr("class", function(d) { return "node " + d.class; })
//             .attr("stroke", "#fff")
//             .attr("stroke-width", 0.5)
//             .attr("r", 8)
//             .style("opacity", "0.9")
//             // .attr("x", 100)
//             // .attr("y", 40)
//             .attr("fill", function (d) {
//                 return colorScale(d.group)
//             })
//         node.filter(function(d) { return d.img; })
//             .append("image")
//             .attr("xlink:href", function(d) { return d.img; })
//             // .attr("x", -nodeRadius)
//             // .attr("y", -nodeRadius)
//             // .attr("width", nodeRadius * 2)
//             // .attr("height", nodeRadius * 2);
//     //   console.log(data.img)
//         node.filter(function(d) { return !d.img; })
//             .append("image")
//             .attr("xlink:href", "placeholder.png") // or any other default image you want to use
//             // .attr("x", -nodeRadius)
//             // .attr("y", -nodeRadius)
//             // .attr("width", nodeRadius * 2)
//             // .attr("height", nodeRadius * 2);
            

//     // Text labels
//     // create a new SVG text element for the node with ID "node1"
// var node1Text = svg.append("text")
// .attr("class", "nodeText")
// .attr("dy", ".35em")
// .text("Judges")
// .attr("x", 150)
// .attr("y", 400);

// var node2Text = svg.append("text")
// .attr("class", "nodeText")
// .attr("dy", ".35em")
// .text("Solicitors General")
// .attr("x", 270)
// .attr("y", 400);

// var node3Text = svg.append("text")
// .attr("class", "nodeText")
// .attr("dy", ".35em")
// .text("Private Practice")
// .attr("x", 450)
// .attr("y", 400);

// var node4Text = svg.append("text")
// .attr("class", "nodeText")
// .attr("dy", ".35em")
// .text("Academia")
// .attr("x", 580)
// .attr("y", 400);
    
// var node5Text = svg.append("text")
// .attr("class", "nodeText")
// .attr("dy", ".35em")
// .text("Trump Admin")
// .attr("x", 650)
// .attr("y", 400);

// var node6Text = svg.append("text")
// .attr("class", "nodeText")
// .attr("dy", ".35em")
// .text("Other")
// .attr("x", 850)
// .attr("y", 400);
//     // //     /* ADD A TOOLTIP */
//     var tooltip = d3.select("#my_dataviz")
//     .append("div")
//     .attr("class", "tooltip");
    
//     node.on("mouseover", function (e, d) {
//     var cx = d.x + 20;
//     var cy = d.y - 10;
//     console.log(d)
    
//     tooltip.style("visibility", "visible")
//         .style("left", cx + "px")
//         .style("top", cy + "px")
//         .style("background-color", "white")
//         .style("border", "1px solid black")
//         .style("border-radius", "5px")
//         .style("padding", "10px")
//         .html(`${d.person}<br />
//         Field: ${d.group} `
//         );
//         // .text(d.person);
    
//     }).on("mouseout", function () {
//     tooltip.style("visibility", "hidden");
//     });
    
//     //     /* 
//     //     INITIALIZE FORCE SIMULATION 
//     //     Find a layout that you like by tweaking the parameters. 
//     //     For a useful tool, see:
//     //     https://bl.ocks.org/steveharoz/8c3e2524079a8c440df60c1ab72b5d03
//     //     */
//     const simulation = d3.forceSimulation(nodes)
//     // .force("x", d3.forceX(40).strength(0.4).x(100))
//     //   .force("y", d3.forceY(50).strength(0.3).y(100))
//       .velocityDecay(0.95)
//       .alphaTarget(0.000001)
//       .alphaDecay(0);
    
//     simulation.on("tick", () => {
//         if (simulation.alpha() < 0.05) {
//           simulation.alphaTarget(0.3).alphaDecay(0.0001);
//         } else {
//           simulation.alphaTarget(0.3).alphaDecay(0.00001);
//         }
//         // update node positions here
//     function moveToClusters() {
//         node1Text.attr("x", 150)
//             .attr("y", 350)
//         node2Text.attr("x", 300)
//             .attr("y", 350)
//         node3Text.attr("x", 465)
//             .attr("y", 400)
//         node4Text.attr("x", 580)
//             .attr("y", 350)
//         node5Text.attr("x", 670)
//             .attr("y", 350)
//         node6Text.attr("x", 780)
//             .attr("y", 350)
//         simulation
//                     .force("x", d3.forceX(100).strength(1).x(d => {
//         if (d.end_location_number === 1) {
//             return width * 0.2;
//         } else if (d.end_location_number === 2) {
//             return width * 0.3;
//         } else if (d.end_location_number === 3) {
//             return width * 0.4;
//         } else if (d.end_location_number === 4) {
//             return width * 0.47;
//         } else if (d.end_location_number === 5) {
//             return width * 0.6;
//         }else if (d.end_location_number === 6) {
//             return width * 0.7;
//         }else if (d.end_location_number === 7) {
//             return width * 0.8;
//         }else {
//             return width * 0.9;
//         }
//     }))
//     // 1000
//     // 30
//       .force("y", d3.forceY(100).strength(1).y(275))
//             // .force("center", d3.forceCenter(width / 2, height / 2))
//             // .force("charge", d3.forceManyBody().strength(-100))
//             // .force("collide", d3.forceCollide(3).radius(10).strength(0.6))
//             .force("manyBody", d3.forceManyBody().strength(-100))
//             .alpha(.05)
//             .alphaDecay(0.00005)
//             .velocityDecay(0.5);
//             // .force("x", d3.forceX(40).strength(0.4).x(d => {
//             //     if (d.end_location_number === 1) {
//             //         return width * 0.2;
//             //     } else if (d.end_location_number === 2) {
//             //         return width * 0.4;
//             //     } else if (d.end_location_number === 3) {
//             //         return width * 0.6;
//             //     } else {
//             //         return width * 0.8;
//             //     }
//             //   }))
//             //   .force("y", d3.forceY(50).strength(0.6).y(300))
//             //     // .force("center", d3.forceCenter(width / 2, height / 2))
//             //  .force("collide", d3.forceCollide().radius(10).strength(0.4))
//             //  .velocityDecay(0.99)
//             //   .alphaTarget(0.3)
//             //   .alphaDecay(0.000001)
//             //   .restart();
//           }
    
    
        
//     function ticked() {
//         moveToClusters();
//         node
//           .attr("cx", (d) => d.x)
//           .attr("cy", (d) => d.y);
//       }
//         simulation.on("tick", ticked);
          
//       });

//     })




// test with manual positions




d3.csv("thomas_ppl_resp.csv").then(function(data) {
  
  data.forEach(function (d) {
    d["start_location_x"] = +d["start_location_x"];
    d["start_location_y"] = +d["start_location_y"];
    d["end_location_x"] = +d["end_location_x"];
    d["end_location_y"] = +d["end_location_y"];
    d["chapter_start_x"] = +d["chapter_start_x"]
    d["chapter_start_y"] = +d["chapter_start_y"]
    d["chapter_end_x"] = +d["chapter_end_x"]
    d["chapter_end_y"] = +d["chapter_end_y"]
    // d.end_location_x = (+d.end_location_x / containerWidth) * 100;
    // d.end_location_y = (+d.end_location_y / containerHeight) * 100;
    // d.start_location_x = (+d.start_location_x / containerWidth) * 100;
    // d.start_location_y = (+d.start_location_y / containerHeight) * 100;

  });
    console.log(data)

// color scale
  var colorScale = d3.scaleOrdinal()
            // .domain(uniqueZones)
            .domain(["Judges","Trump Admin","Solicitors General", "Private Practice", "Academia", "Outliers and Activists"])
            .range(["#f94144", "#f3722c", "#f9c74f", "#90be6d", "#43aa8b", "#577590"]);
        // console.log(uniqueZones)
    // "Judges","Trump Admin","Private Practice", "Academia", "Solicitors General", "Other"




    // tooltip
 // tooltip
 const tooltipSorting = d3
 .select("#my_dataviz")
 .append("div")
 .style("opacity", 0)
 .attr("class", "tooltip")
 .style("background-color", "white")
 .style("border", "solid")
 .style("border-width", "1px")
 .style("border-radius", "5px");



// A function that change this tooltip when the user hover a point.
// Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
const mouseover = function (event, d) {
  tooltipSorting.style("opacity", 1);
};

const mousemove = function (event, d) {
  tooltipSorting
  .html(
    ` ${d.person}`
  )
  .style("left", event.pageX + 30 + "px")
  .style("top", event.pageY - 1200 + "px");

};

// A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
const mouseleave = function (event, d) {
  tooltipSorting.transition().duration(200).style("opacity", 0);

};

var tooltipChapters = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0)
.attr("class", "tooltip")
.style("background-color", "white")
.style("border", "solid")
.style("border-width", "1px")
.style("border-radius", "5px");
;


  // setting up scrollama
  var scroller = scrollama();
  scroller.setup({
    step: ".trigger",
    offset: 0.5,
    duration: 1000,
    threshold: 4
  });

  // setting up original location
  var r = 20;
    // var circles = svg.selectAll("circle")
    //   .data(data)
    //   .enter()
    //   .append("circle")
    //   .attr("cx", function(d) { return d.start_location_x; })
    //   .attr("cy", function(d) { return d.start_location_y; })
    //   .attr("r", r)
    //   .attr("fill", "grey")
    //   .attr("stroke","black")
    //   .on("mouseover", function(event, d) {
    //     d3.select(this).classed("bigger", true);
    //     mouseover(event, d);
    //   })
    //   .on("mousemove", mousemove)
    //   .on("mouseleave", function(event, d) {
    //     d3.select(this).classed("bigger", false);
    //     mouseleave(event, d);
    //   });

    // circles.attr("class","bubbles")

    var rectangles = svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => `${d.start_location_x}%`) // x position of the rectangle
      .attr("y", (d) => `${d.start_location_y}%`) // y position of the rectangle
      .attr("width", r) // width of the rectangle
      .attr("height", r) // height of the rectangle
      .attr("fill", "grey")
      .attr("stroke","black")
      .on("mouseover touchstart", function(event, d) {
        d3.select(this).classed("bigger", true);
        mouseover(event, d,tooltipSorting);
      })
      .on("mousemove touchmove", function (event, d) {
        mousemove(event, d, tooltipSorting);
      })
      .on("mouseleave touchend", function(event, d) {
        d3.select(this).classed("bigger", false);
        mouseleave(event, d, tooltipSorting);
      });

      rectangles.attr("class","bubbles")


  // setting up original location for Judges chapter
      var judges_rectangles = judgesSvg.selectAll("rect")
      .data(data.filter(function(d) {
        return d.group === "Judges";
      }))
      .enter()
      .append("rect")
      .attr("x", (d) => `${d.chapter_start_x}%`) // x position of the rectangle
      .attr("y", (d) => `${d.chapter_start_y}%`) // y position of the rectangle
      .attr("width", r) // width of the rectangle
      .attr("height", r) // height of the rectangle
      .attr("fill", function (d) {
        return colorScale(d.group)
      })
      .attr("stroke","black")
      .on("mouseover touchstart", function(event, d) {
        d3.select(this).classed("bigger", true);
        tooltipChapters.style("opacity", 1)
        .style("left", (event.pageX +10) + "px") // Position the tooltip next to the mouse cursor
        .style("top", (event.pageY -30) + "px");

      })
      .on("mousemove touchmove", function(event, d) {
        tooltipChapters.style("opacity", 1)
          .html(
                  ` <b>${d.person}</b><br>
                  Clerked for Thomas from ${d.clerk_term}<br>
                  Graduated from ${d.law_school}<br>
                  Appellate clerkship - ${d.appellate_clerkship}`
                ) 
            // Set the content of the tooltip to the person's name
          .style("left", (event.pageX +10) + "px") // Position the tooltip next to the mouse cursor
          .style("top", (event.pageY -30) + "px");
      })
      .on("mouseleave touchend", function(event, d) {
        d3.select(this).classed("bigger", false);
        tooltipChapters.transition().duration(200).style("opacity", 0);
      });
   
  

      judges_rectangles.attr("class","bubbles")

      // images
      var images = judgesSvg.selectAll("image")
      .data(data.filter(function(d) {
        return d.group === "Judges";
      }))
      .enter()
      .append("image")
      .attr("xlink:href", function(d) { return 'Square Judge Pictures.nosync/' + d.image_filename; })
      .attr("x", (d) => `${d.chapter_start_x}%`) // x position of the image
      .attr("y", (d) => `${d.chapter_start_y}%`) // y position of the image
      .attr("width", r) // width of the image
      .attr("height", r) // height of the image
      .on("mouseover touchstart", function(event, d) {
        d3.select(this).classed("bigger", true);
        tooltipChapters.style("opacity", 1);

      })
      .on("mousemove touchmove", function(event, d) {
        tooltipChapters.style("opacity", 1)
          .html(
                  ` <b>${d.person}</b><br>
                  Clerked for Thomas from ${d.clerk_term}<br>
                  Graduated from ${d.law_school}<br>
                  Appellate clerkship - ${d.appellate_clerkship}`
                ) 
            // Set the content of the tooltip to the person's name
          .style("left", (event.pageX + 10) + "px") // Position the tooltip next to the mouse cursor
          .style("top", (event.pageY +70) + "px");
      })
      .on("mouseleave touchend", function(event, d) {
        d3.select(this).classed("bigger", false);
        tooltipChapters.transition().duration(200).style("opacity", 0);
      });
   
   

// setting up original location for Trump Admin
var trump_admin_rectangles = trumpAdminSvg.selectAll("rect")
.data(data.filter(function(d) {
  return d.group === "Trump Admin";
}))
.enter()
.append("rect")
.attr("x", (d) => `${d.chapter_start_x}%`) // x position of the rectangle
.attr("y", (d) => `${d.chapter_start_y}%`) // y position of the rectangle
.attr("width", r) // width of the rectangle
.attr("height", r) // height of the rectangle
.attr("fill", function (d) {
  return colorScale(d.group)
})
.attr("stroke","black")
 .on("mouseover touchstart", function(event, d) {
        d3.select(this).classed("bigger", true);
        tooltipChapters.style("opacity", 1);

      })
      .on("mousemove touchmove", function(event, d) {
        tooltipChapters.style("opacity", 1)
          .html(
                  ` <b>${d.person}</b><br>
                 [Bio here]`
                ) 
            // Set the content of the tooltip to the person's name
          .style("left", (event.pageX + 10) + "px") // Position the tooltip next to the mouse cursor
          .style("top", (event.pageY +70) + "px");
      })
      .on("mouseleave touchend", function(event, d) {
        d3.select(this).classed("bigger", false);
        tooltipChapters.transition().duration(200).style("opacity", 0);
      });


trump_admin_rectangles.attr("class","bubbles")


// setting up original location for Sol Gen chapter
var sol_gen_rectangles = solGenSvg.selectAll("rect")
.data(data.filter(function(d) {
  return d.group === "Solicitors General";
}))
.enter()
.append("rect")
.attr("x", (d) => `${d.chapter_start_x}%`) // x position of the rectangle
.attr("y", (d) => `${d.chapter_start_y}%`) // y position of the rectangle
.attr("width", r) // width of the rectangle
.attr("height", r) // height of the rectangle
.attr("fill", function (d) {
  return colorScale(d.group)
})
.attr("stroke","black")
.on("mouseover touchstart", function(event, d) {
  d3.select(this).classed("bigger", true);
  tooltipChapters.style("opacity", 1);

})
.on("mousemove touchmove", function(event, d) {
  tooltipChapters.style("opacity", 1)
    .html(
            ` <b>${d.person}</b><br>
           [Bio here]`
          ) 
      // Set the content of the tooltip to the person's name
    .style("left", (event.pageX + 10) + "px") // Position the tooltip next to the mouse cursor
    .style("top", (event.pageY +70) + "px");
})
.on("mouseleave touchend", function(event, d) {
  d3.select(this).classed("bigger", false);
  tooltipChapters.transition().duration(200).style("opacity", 0);
});
  
sol_gen_rectangles.attr("class","bubbles")

// setting up original location for Private Practice chapter
var private_practice_rectangles = privatePracticeSvg.selectAll("rect")
.data(data.filter(function(d) {
  return d.group === "Private Practice";
}))
.enter()
.append("rect")
.attr("x", (d) => `${d.chapter_start_x}%`) // x position of the rectangle
.attr("y", (d) => `${d.chapter_start_y}%`) // y position of the rectangle
.attr("width", r) // width of the rectangle
.attr("height", r) // height of the rectangle
.attr("fill", function (d) {
  return colorScale(d.group)
})
.attr("stroke","black")
.on("mouseover touchstart", function(event, d) {
  d3.select(this).classed("bigger", true);
  tooltipChapters.style("opacity", 1);

})
.on("mousemove touchmove", function(event, d) {
  tooltipChapters.style("opacity", 1)
    .html(
            ` <b>${d.person}</b><br>
           [Bio here]`
          ) 
      // Set the content of the tooltip to the person's name
    .style("left", (event.pageX + 10) + "px") // Position the tooltip next to the mouse cursor
    .style("top", (event.pageY +70) + "px");
})
.on("mouseleave touchend", function(event, d) {
  d3.select(this).classed("bigger", false);
  tooltipChapters.transition().duration(200).style("opacity", 0);
});
  
private_practice_rectangles.attr("class","bubbles")

// setting up original location for Academia chapter

var academia_rectangles = academiaSvg.selectAll("rect")
.data(data.filter(function(d) {
  return d.group === "Academia";
}))
.enter()
.append("rect")
.attr("x", (d) => `${d.chapter_start_x}%`) // x position of the rectangle
.attr("y", (d) => `${d.chapter_start_y}%`) // y position of the rectangle
.attr("width", r) // width of the rectangle
.attr("height", r) // height of the rectangle
.attr("fill", function (d) {
  return colorScale(d.group)
})
.attr("stroke","black")
.on("mouseover touchstart", function(event, d) {
  d3.select(this).classed("bigger", true);
  tooltipChapters.style("opacity", 1);

})
.on("mousemove touchmove", function(event, d) {
  tooltipChapters.style("opacity", 1)
    .html(
            ` <b>${d.person}</b><br>
           [Bio here]`
          ) 
      // Set the content of the tooltip to the person's name
    .style("left", (event.pageX + 10) + "px") // Position the tooltip next to the mouse cursor
    .style("top", (event.pageY +70) + "px");
})
.on("mouseleave touchend", function(event, d) {
  d3.select(this).classed("bigger", false);
  tooltipChapters.transition().duration(200).style("opacity", 0);
});
  
academia_rectangles.attr("class","bubbles")

// setting up original location for outliers chapter

var other_rectangles = otherSvg.selectAll("rect")
.data(data.filter(function(d) {
  return d.group === "Outliers and Activists";
}))
.enter()
.append("rect")
.attr("x", (d) => `${d.chapter_start_x}%`) // x position of the rectangle
.attr("y", (d) => `${d.chapter_start_y}%`) // y position of the rectangle
.attr("width", r) // width of the rectangle
.attr("height", r) // height of the rectangle
.attr("fill", function (d) {
  return colorScale(d.group)
})
.attr("stroke","black")
.on("mouseover touchstart", function(event, d) {
  d3.select(this).classed("bigger", true);
  tooltipChapters.style("opacity", 1);

})
.on("mousemove touchmove", function(event, d) {
  tooltipChapters.style("opacity", 1)
    .html(
            ` <b>${d.person}</b><br>
           [Bio here]`
          ) 
      // Set the content of the tooltip to the person's name
    .style("left", (event.pageX + 10) + "px") // Position the tooltip next to the mouse cursor
    .style("top", (event.pageY +70) + "px");
})
.on("mouseleave touchend", function(event, d) {
  d3.select(this).classed("bigger", false);
  tooltipChapters.transition().duration(200).style("opacity", 0);
});
  
other_rectangles.attr("class","bubbles")

    scroller.onStepEnter(function (response) {
     
      // scrolling and buttons
      var target = document.querySelector('.scroll-btn[href="' + response.element.id + '"]');
      if (target) {
        target.classList.add('active');
      }
 

      // everything else
      if (response.index === 0) {
        var r = 40;
        // var circles = svg.selectAll("circle")
        //   .data(data);
    
        // circles.transition()
        //   .duration(3000)
        //   .attr("fill", function (d) {
        //     return colorScale(d.group)
        //   })
        //   .attr("cx", function(d) { return d.end_location_x; })
        //   .attr("cy", function(d) { return d.end_location_y; });

        var rectangles = svg.selectAll("rect")
          .data(data);
    
        rectangles.transition()
          .duration(2000)
          .attr("fill", function (d) {
            return colorScale(d.group)
          })
          .attr("x", (d) => `${d.end_location_x}%`) // x position of the rectangle
      .attr("y", (d) => `${d.end_location_y}%`) // y position of the rectangle
      .attr("width", r) // width of the rectangle
      .attr("height", r) // height of the rectangle



        // sticky buttons
        document.getElementById("buttons").classList.add("sticky");

          // bottom 20% sticky
              // Apply sticky behavior to the bottom 20% of my_dataviz
    const myDataviz = document.getElementById("my_dataviz");
    myDataviz.classList.add("partial_sticky");

 
      } else if (response.index===1) {

       
              // judges chapter header

      var rJudge = 50;
      var judges_rectangles = judgesSvg.selectAll("rect")
      .data(data.filter(function(d) {
        return d.group === "Judges";
      }));


// Append 'image' elements for each data point
var images = judgesSvg.selectAll("image")
.data(data.filter(function(d) {
  return d.group === "Judges";
}));


    judges_rectangles.transition()
      .duration(2000)
      .attr("fill", function (d) {
        return colorScale(d.group)
      })
      .attr("x", (d) => `${d.chapter_end_x}%`) // x position of the rectangle
      .attr("y", (d) => `${d.chapter_end_y}%`) // y position of the rectangle
      .attr("width", rJudge) // width of the rectangle
      .attr("height", rJudge) // height of the rectangle

    
  images.transition()
  // .delay(1000)
  .duration(2000) // Same duration as the judges_rectangles transition
 
  .attr("x", (d) => `${d.chapter_end_x}%`) // x position of the image
  .attr("y", (d) => `${d.chapter_end_y}%`) // y position of the image
  .attr("width", rJudge) // width of the image
  .attr("height", rJudge) // height of the image
 

    // sticky buttons
    document.getElementById("buttons").classList.add("sticky");


      }
      else if (response.index===2) {

       
        // trump admin

var rTrumpAdmin = 50;
var trump_admin_rectangles = trumpAdminSvg.selectAll("rect")
.data(data.filter(function(d) {
  return d.group === "Trump Admin";
}));

trump_admin_rectangles.transition()
.duration(2000)
.attr("fill", function (d) {
  return colorScale(d.group)
})
.attr("x", (d) => `${d.chapter_end_x}%`) // x position of the rectangle
.attr("y", (d) => `${d.chapter_end_y}%`) // y position of the rectangle
.attr("width", rTrumpAdmin) // width of the rectangle
.attr("height", rTrumpAdmin) // height of the rectangle


// sticky buttons
document.getElementById("buttons").classList.add("sticky");


}
else if (response.index===3) {

       
  // trump admin

var rSolGen = 50;
var sol_gen_rectangles = solGenSvg.selectAll("rect")
.data(data.filter(function(d) {
return d.group === "Solicitors General";
}));

sol_gen_rectangles.transition()
.duration(2000)
.attr("fill", function (d) {
return colorScale(d.group)
})
.attr("x", (d) => `${d.chapter_end_x}%`) // x position of the rectangle
.attr("y", (d) => `${d.chapter_end_y}%`) // y position of the rectangle
.attr("width", rSolGen) // width of the rectangle
.attr("height", rSolGen) // height of the rectangle


// sticky buttons
document.getElementById("buttons").classList.add("sticky");

}
else if (response.index===4) {

       
  // private practice

var rPrivatePractice = 28;
var private_practice_rectangles = privatePracticeSvg.selectAll("rect")
.data(data.filter(function(d) {
return d.group === "Private Practice";
}));

private_practice_rectangles.transition()
.duration(2000)
.attr("fill", function (d) {
return colorScale(d.group)
})
.attr("x", (d) => `${d.chapter_end_x}%`) // x position of the rectangle
.attr("y", (d) => `${d.chapter_end_y}%`) // y position of the rectangle
.attr("width", rPrivatePractice) // width of the rectangle
.attr("height", rPrivatePractice) // height of the rectangle


// sticky buttons
document.getElementById("buttons").classList.add("sticky");

}
else if (response.index===5) {

       
  // academia

var rAcademia = 50;
var academia_rectangles = academiaSvg.selectAll("rect")
.data(data.filter(function(d) {
return d.group === "Academia";
}));

academia_rectangles.transition()
.duration(2000)
.attr("fill", function (d) {
return colorScale(d.group)
})
.attr("x", (d) => `${d.chapter_end_x}%`) // x position of the rectangle
.attr("y", (d) => `${d.chapter_end_y}%`) // y position of the rectangle
.attr("width", rAcademia) // width of the rectangle
.attr("height", rAcademia) // height of the rectangle


// sticky buttons
document.getElementById("buttons").classList.add("sticky");

}
else if (response.index===6) {

       
  // outliers

var rOther = 50;
var other_rectangles = otherSvg.selectAll("rect")
.data(data.filter(function(d) {
return d.group === "Outliers and Activists";
}));

other_rectangles.transition()
.duration(2000)
.attr("fill", function (d) {
return colorScale(d.group)
})
.attr("x", (d) => `${d.chapter_end_x}%`) // x position of the rectangle
.attr("y", (d) => `${d.chapter_end_y}%`) // y position of the rectangle
.attr("width", rOther) // width of the rectangle
.attr("height", rOther) // height of the rectangle


// sticky buttons
document.getElementById("buttons").classList.add("sticky");

}
      
      
      else {
        document.getElementById("buttons").classList.remove("sticky");
            // Remove sticky behavior if not in the first section
    const myDataviz = document.getElementById("my_dataviz");
    myDataviz.classList.remove("partial_sticky");
       
      }

           
      // chapter headers
      // Get the current chapter block and its index
  const chapterBlock = response.element;
  const chapterIndex = response.index;

  // Add the "sticky" class to the current chapter block
  chapterBlock.classList.add("sticky_header");

  // Remove the "sticky" class from all previous chapter blocks
  for (let i = 0; i < chapterIndex; i++) {
    const previousChapterBlock = chapterBlocks[i];
    previousChapterBlock.classList.remove("sticky_header");
  }

  // Remove the "sticky" class from all subsequent chapter blocks
  for (let i = chapterIndex + 1; i < chapterBlocks.length; i++) {
    const subsequentChapterBlock = chapterBlocks[i];
    subsequentChapterBlock.classList.remove("sticky_header");
  }
    });
    
    scroller.onStepExit(function(response) {
      // Get the corresponding scroll button for the previous section
      var target = document.querySelector('.scroll-btn[href="' + response.element.id + '"]');
      if (target) {
        target.classList.remove('active');
      }
    });
    
//     circles.transition()
//     .transition()
//     .duration(3000)
//     .attr("fill", function (d) {
//       return colorScale(d.group)
//   })
//     .attr("cx", function(d) { return d.end_location_x; })
//     .attr("cy", function(d) { return d.end_location_y; });

//  circles.each(function(d) {
        
//         d3.select(this)
//           .append("image")
//           .attr("xlink:href", "Formatted.nosync/" + d.image_filename)
//           .attr("width", r)
//           .attr("height", r)
//           .attr("x", function(d) { return d.end_location_x - r; }) // center the image horizontally
//           .attr("y", function(d) { return d.end_location_y - r; }); // center the image vertically
//       });








      // circles.each(function(d) {
      //   var image = d3.select(this)
      //     .append("image")
      //     .attr("x", -20)
      //     .attr("y", -20)
      //     .attr("width", 40)
      //     .attr("height", 40);
      
      //   if (d.image_filename) {
      //     image.attr("xlink:href", "/Formatted/"+d.image_filename);
      //   } else {
      //     image.attr("xlink:href", "placeholder.png");
      //   }
      // });
      
  
 
  });
  