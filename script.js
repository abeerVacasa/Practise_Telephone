// d3.select('#chart')
//     .append('svg')
//     .attr('width',600)
//     .attr('height',400)
//     .style('background','pink');
//
//
// $("#btn").on('click', function () {
//   alert('hi');
//   var x = document.getElementById("x").value;
//   var y = document.getElementById("y").value;
//   var height =document.getElementById("height").value;
//   var width =document.getElementById("width").value;
//   d3.select('rect').remove()
//   d3.select('svg')
//       .append("rect")
//       .attr('x',x)
//       .attr('y',y)
//       .attr('height',height)
//       .attr('width',width)
// });
// d3.select(".container")
// .data([5,1,2,2])
// .enter()
// .append("p")
// .text(function (d) { return d; });
//
// var matrix = [
//   [5,5,5,5,
//   ,6,  6 , 6 ,
//    8, 8, 8, 8,
//    1,   1,  1, 1]
// ];
//
// d3.select(".container")
//   .data(matrix)
//   .append("div").enter().text(function(d){return d + "hi"};);
// var svg =d3.selectAll("svg");
//
// var circle = svg.selectAll("circle");
//
// circle.style("fill", "steelblue");
// circle.data([100,145,156]);
// circle.attr("cy", function() { return (Math.random() * 520) +1; } );
// circle.attr("cx", function(d, i) { return i+42; });
// circle.attr("r",function(d){return Math.sqrt(d +200);});
//
// circle.append("text")
//        .attr("font-size", "2em")
//        .attr("color", "black")
//        .text("Hello");
$( document ).ready(function(){
    console.log( "ready!" );
 $('#phone').intlTelInput({
    utilsScript:"intl-tel-input-master/lib/libphonenumber/build/utils.js"});

  $('#form').submit(function(event){
    event.preventDefault();
    var phone = $('#phone').val();
    $("span#span").text(phone);

    var isValid = $('#phone').intlTelInput("isValidNumber");
    $("#verify").text(isValid);
  });



});
