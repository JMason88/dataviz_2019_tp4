var side = 500

var coleccionNOHARDCODEADA = [];

var var_x = side/2;

var var_y = side/2;

var col = ["green", "purple", "red"];

var temp = 0;

var temp2 = [];


for (iterator_r = 225; iterator_r > 0; iterator_r = iterator_r - 75)
{    
        var elemento = {"x_axis": var_x, "y_axis": var_y, "radius":iterator_r, "color":col[temp]};
        coleccionNOHARDCODEADA.push(elemento);
        
        temp2.push(temp)
        var temp = temp + 1;
            
        if (temp > 2){
            var temp = 0;
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
       .style("fill", function(d) {return d.color;})
       ;

console.log(temp2);