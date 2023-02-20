function plot() {
    var xdropdown = document.getElementById("xdropdown");
	var newx = xdropdown.value;
	var xloc = newx * 30

	var ydropdown = document.getElementById("ydropdown");
	var newy = ydropdown.value;
	var yloc = 300 - newy*30

	var frame = document.getElementById("frame");

	var point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	point.setAttribute("id", "(" + newx + ", " + newy + ")")
	point.setAttribute("class", "point");
	point.setAttribute("cx", xloc);
	point.setAttribute("cy", yloc);
	point.setAttribute("r", 8);
	point.setAttribute("onclick", "highlight(this.id)")
	frame.appendChild(point);
	
}

function highlight(point_id) {
      document.getElementById(point_id).classList.toggle('highlight');
      document.getElementById("recent").innerHTML = point_id;
  }



