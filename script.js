function plot() {
  // get the x and y values from the dropdown menus
  var xValue = parseInt(document.getElementById("xdropdown").value);
  var yValue = parseInt(document.getElementById("ydropdown").value);

  // add the point to the visualization
  d3.select("#my_dataviz")
    .append("circle")
      .attr("cx", xValue * 50)
      .attr("cy", yValue * 50)
      .attr("r", 10)
      .style("fill", "red");
}

