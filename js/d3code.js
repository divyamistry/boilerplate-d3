/* sample d3 circle on page */
var d3svg = d3.select("body")
              .append("svg")
              .attr("width", 150)
              .attr("height",150);

/*  */
var myData = [10, 21, 32];
var para = d3svg.selectAll("circle")
                .data(myData)
                .enter()
                .append("circle")
                .attr("cx", function(d) { return d+25; })
                .attr("cy", function(d,i) { return 50+(i*25); })
                .attr("r", function(d) { return d; })
                .style("fill", function(d) { 
                                             if( (d%3) == 0 ) {
                                               return "green";
                                             } else
                                             if( (d%4) == 0 ) {
                                               return "blue";
                                             } else 
                                             if( (d%5) == 0 ) {
                                               return "yellow";
                                             } else {
                                               return "black";
                                             }
                                           });