var side = 500

var coleccionNOHARDCODEADA = [];

var mu = side/2;

var sigma = 50;

var sigma2 = 300;


function standardize(variable_input, mu, sigma) {
    var output = (variable_input - mu) / sigma;
    return output
};

function normal_dist(variable_input, mu, sigma) {
    var output = (1/(Math.sqrt(2*Math.PI)*sigma)) * Math.exp(
                    -(1/2) * Math.pow(
                        standardize(variable_input, mu, sigma),
                        2
                    ) 
                );
    return output 
};



for (iterator_x = 10; iterator_x < side; iterator_x = iterator_x + side/17)
{   
    for (iterator_y = 10; iterator_y < side; iterator_y = iterator_y + side/17)
    {   
        var radius = (normal_dist(iterator_x, mu, sigma) * normal_dist(iterator_y, mu, sigma)) *150000
                        +
                     (normal_dist(iterator_x, mu, sigma2) * normal_dist(iterator_y, mu, sigma2)) *900000
        ;
        var elemento = {"x_axis": iterator_x, "y_axis": iterator_y, "radius": radius, "color":"green"};
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
       .style("color", function(d) {return d.color;})
       ;

console.log(radius_x);