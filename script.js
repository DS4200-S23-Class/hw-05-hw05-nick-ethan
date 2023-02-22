function plot() {
  // get the x and y values from the dropdown menus
  var xValue = parseInt(document.getElementById("xdropdown").value);
  var yValue = parseInt(document.getElementById("ydropdown").value);
  var svg = d3.select("#my_dataviz");
  svg.append("circle")
    .attr("cx", x * 50) // assuming a scale of 50 units per x/y value
    .attr("cy", y * 50)
    .attr("r", 5)
    .style("fill", "red")
    .style("stroke", "black");
}
