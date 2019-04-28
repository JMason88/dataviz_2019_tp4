var side = 500

var coleccionNOHARDCODEADA = [];

for (iterator_x = 10; iterator_x < side; iterator_x = iterator_x + side/17)
{
    for (iterator_y = 10; iterator_y < side; iterator_y = iterator_y + side/17)
    {
        var elemento = {
            "x_axis": iterator_x, 
            "y_axis": iterator_y, 
            "radius":10, 
            "color":d3.rgb(iterator_x*255/500, iterator_y*255/500, 0)
        };
        coleccionNOHARDCODEADA.push(elemento);
    };
};


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
       .style("fill", function(d) {return d.color;})
       ;

console.log(coleccionNOHARDCODEADA);