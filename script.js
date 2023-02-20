var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// create the SVG element
var svg = d3.select("#my_bar_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// load the data and draw the chart
d3.csv("https://raw.githubusercontent.com/DS4200-S23-Class/hw-05-hw05-nick-ethan/master/data/bar-data.csv", function(data) {

  // define the scales and axes
  var x = d3.scaleBand()
      .range([0, width])
      .padding(0.2)
      .domain(data.map(function(d) { return d.category; }));

  var y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, function(d) { return d.amount; })]);

  var xAxis = d3.axisBottom(x);
  var yAxis = d3.axisLeft(y);

  // add the x-axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)");

  // add the y-axis
  svg.append("g")
      .call(yAxis);

  // add the bars
  svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.category); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.amount); })
      .attr("height", function(d) { return height - y(d.amount); })
      .on("mouseover", function(d) {
        // change the fill color and display the tooltip
        d3.select(this)
          .attr("fill", "orange")
          .append("title")
          .text(function(d) { return d.amount; });

        // display the tooltip
        d3.select("#tooltip")
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY + "px")
          .html("Value: " + d.amount)
          .style("display", "block");
      })
      .on("mouseout", function(d) {
        // revert to the original fill color and hide the tooltip
        d3.select(this)
          .attr("fill", "blue")
          .select("title")
          .remove();

        // hide the tooltip
        d3.select("#tooltip")
          .style("display", "none");
      });
});
