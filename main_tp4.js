var side = 500

var coleccionNOHARDCODEADA = [];

for (iterator_x = 0; iterator_x <side; iterator_x = iterator_x + 30)
{
    for (iterator_y = 0; iterator_y <side; iterator_y = iterator_y + 30)
    {
        var elemento = {"x_axis": iterator_x, "y_axis": iterator_y, "radius":10, "color":"green"};
        coleccionNOHARDCODEADA.push(elemento);
    };
};

var circlesCollection = [
    {"x_axis":200, "y_axis":50, "radius":20, "color":"black"},
    {"x_axis":300, "y_axis":450, "radius":200, "color":"red"},
    {"x_axis":400, "y_axis":150, "radius":40, "color":"black"},
    {"x_axis":350, "y_axis":250, "radius":150, "color":"black"},
    {"x_axis":100, "y_axis":300, "radius":100, "color":"black"},
    {"x_axis":25, "y_axis":150, "radius":25, "color":"black"}
];

// Creo un Canvas
var canvas = d3.select("body")
               .append("svg")
               .attr("width",side)
               .attr("height",side);

// Creo círculos
var circles = canvas.selectAll("circle")
                    .data(coleccionNOHARDCODEADA)
                    .enter()
                    .append("circle");

circles.attr("cx", function(d) {return d.x_axis;})
       .attr("cy", function(d) {return d.y_axis;})
       .attr("r", function(d) {return d.radius;})
       .style("color", function(d) {return d.color;})
       ;

console.log(coleccionNOHARDCODEADA);