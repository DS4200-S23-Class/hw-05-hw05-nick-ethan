  const coordinates = document.getElementById("coordinates");
  svg.selectAll('circle').on('click', function(event) {
    const x = event.target.getAttribute('cx');
    const y = event.target.getAttribute('cy');
    coordinates.innerText = `(${x}, ${y})`;
  });
