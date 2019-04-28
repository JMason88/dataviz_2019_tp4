var side = 500

var coleccionNOHARDCODEADA = [];

for (iterator_x = 0; iterator_x <side; iterator_x = iterator_x + 15)
{
    for (iterator_y = 0; iterator_y <side; iterator_y = iterator_y + 15)
    {
        // Triangulo Normal
        var elemento = {
            "point_a": (5 + iterator_x) + "," + (0 + iterator_y), 
            "point_b": (0 + iterator_x) + "," + (10 + iterator_y), 
            "point_c": (10 + iterator_x) + "," + (10 + iterator_y), 
            "fill":"yellow", 
            "stroke":"blue", 
            "stroke_width":1
        }
        ;
        // Triangulo dado vuelta
        var elemento2 = {
            "point_a": (7.5 + iterator_x) + "," + (0 + iterator_y), 
            "point_b": (17.5 + iterator_x) + "," + (0 + iterator_y), 
            "point_c": (12.5 + iterator_x) + "," + (10 + iterator_y), 
            "fill":"white", 
            "stroke":"red", 
            "stroke_width":1
        }
        ;
        coleccionNOHARDCODEADA.push(elemento);
        coleccionNOHARDCODEADA.push(elemento2);
    };
};

var polygonsCollection = [
    {"point_a":"200,10", "point_b":"10,30", "point_c":"150,260", "fill":"green", "stroke":"black", "stroke_width":2}
];

// Creo un Canvas
var canvas = d3.select("body")
               .append("svg")
               .attr("width",side)
               .attr("height",side);

// Creo círculos
var polygons = canvas.selectAll("polygon")
                    // .data(polygonsCollection)
                    .data(coleccionNOHARDCODEADA)
                    .enter()
                    .append("polygon");

polygons.attr("points", function(d) {return d.point_a+" "+d.point_b+" "+d.point_c;})
        .style("fill", function(d) {return d.fill;})
        .style("stroke", function(d) {return d.stroke;})
        .style("stroke-width", function(d) {return d.stroke_width;})
       ;

console.log(coleccionNOHARDCODEADA);


