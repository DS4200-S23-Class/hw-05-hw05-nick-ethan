
<style>
  .tooltip {
    position: absolute;
    z-index: 1;
    background-color: white;
    border: 1px solid gray;
    padding: 10px;
    display: none;
  }

  .highlight {
    fill: orange;
  }
</style>

<script>
  const svg = d3.select("#bar-chart");

  const width = +svg.attr("width");
  const height = +svg.attr("height");
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  d3.csv("https://raw.githubusercontent.com/DS4200-S23-Class/hw-05-hw05-nick-ethan/master/data/bar-data.csv")
    .then(function(data) {
      const x = d3.scaleBand()
        .range([0, width - margin.left - margin.right])
        .padding(0.2)
        .domain(data.map(d => d.category));

      const y = d3.scaleLinear()
        .range([height - margin.top - margin.bottom, 0])
        .domain([0, d3.max(data, d => +d.amount)]);

      g.append("g")
        .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

      g.append("g")
        .call(d3.axisLeft(y));

      g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", d => x(d.category))
          .attr("y", d => y(+d.amount))
          .attr("width", x.bandwidth())
          .attr("height", d => height - margin.top - margin.bottom - y(+d.amount))
          .on("mouseover", function(d) {
            d3.select(this)
              .classed("highlight", true)
              .style("cursor", "pointer");

            d3.select("#tooltip")
              .style("left", d3.event.pageX + "px")
              .style("top", d3.event.pageY + "px")
              .style("display", "inline-block")
              .html(`Value: ${d.amount}`);
          })
          .on("mousemove", function(d) {
            d3.select("#tooltip")
              .style("left", d3.event.pageX + "px")
              .style("top", d3.event.pageY + "px");
          })
          .on("mouseout", function(d) {
            d3.select(this)
              .classed("highlight", false)
              .style("cursor", "default");

            d3.select("#tooltip")
              .style("display", "none");
          });
    });
</script>

