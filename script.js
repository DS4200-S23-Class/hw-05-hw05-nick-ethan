function plot() {
  var xcoord = parseInt(document.getElementById("xdropdown").value);
  var ycoord = parseInt(document.getElementById("ydropdown").value);

  // Create a new point object with the x and y coordinates
  var newPoint = {x: xcoord, y: ycoord};

  // Add the new point to the data array
  data.push(newPoint);

  // Redraw the visualization with the new data
  var svg = d3.select("#my_dataviz");
  svg.selectAll("*").remove();
  var circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d) { return xScale(d.x); })
    .attr("cy", function(d) { return yScale(d.y); })
    .attr("r", 5)
    .attr("fill", "red");
}
