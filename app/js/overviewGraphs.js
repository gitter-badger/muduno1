var width = $("svg").parent().width();
var margin = {
	general: 100,
	left: 50,
	bottom: 40
}
var height = 250;
var Data = [];
var maxNumberEngagements;
var setSvgSize = d3.select(".chart")
		.attr("width", width)
		.attr("height", height);
   
// load data and draw graph
function createDailyGraph() {
		 d3.tsv("data/datamuduno2.tsv", function(data) {	
				 Data = d3.nest()
				.key(function(d) { return d.date; })
				.entries(data);
				
		 		maxNumberEngagements = d3.max(Data, function(d) { return (d.values.length)});

		 		xAxisTitle("Date");
		 		yAxisTitle();
				setPath();
				setYPath();
				addXaxis();
				addYaxis();
        });
};
function createHourlyGraph() {
		 d3.tsv("data/datamuduno2.tsv", function(data) {	
				 Data = d3.nest()
				.key(function(d) { return Number(d.time.split(":")[0]); })
				.entries(data);
				
		 		maxNumberEngagements = d3.max(Data, function(d) { return (d.values.length)});

		 		xAxisTitle("Time");
		 		yAxisTitle();
				setPath();
				setYPath();
				addXaxis();
				addYaxis();	
		});
};

// set line graph path

function scaleY () {
		return d3.scale.linear()
		.domain([0, maxNumberEngagements])
    	.range([height - margin.bottom, 0]);
};

function setPath () {
	return setSvgSize.append("path")
		.datum(Data)
		.attr("class","line")
		.attr("d", pathLine())
};

function pathLine () {
		return d3.svg.line()
			.x(function(d,i){return ((((width - margin.general) / (Data.length - 1)) * i) + margin.left );})
			.y(function(d){return scaleY()(d.values.length);})
};	

function setYPath () {
	return setSvgSize.append("path")
		.datum([height - margin.bottom , 0])
		.attr("class","yAxisLine")
		.attr("d", yLine())
};

function yLine () {
		return d3.svg.line()
			.x(function(){return margin.left;})
			.y(function(d){return d;})
};		
 		


// format and insert xAxis
function addXaxis (d) {
	return setSvgSize.selectAll("svg")
			.data(Data)
			.enter().append("g")
			.attr("class", "axis")
      		.attr("transform", function(d,i){return "translate(" + ((((width - margin.general) / (Data.length - 1)) * i) + margin.left ) + ","+ (height - margin.bottom ) +")";})
      		.append("text")
      		.attr("dy", ".71em")
      		.style("text-anchor", "start")
      		.text(function(d){return d.key})
      		.call(xAxis());
};

function xAxis() {
	return d3.svg.axis()
		.orient("bottom");
}

function addYaxis () {
	var i;
	for (i = 0; i < 7; i++){
		setYPoint(i);
	};
};
function setYPoint (position){
	return setSvgSize.append("g")
			.attr("class", "axis")
      		.attr("transform", "translate("+ (margin.left - 10) +"," + (((height -margin.bottom) / 7) * position) +")")
      		.append("text")
      		.attr("dy", ".71em")
      		.style("text-anchor", "end")
      		.text(maxNumberEngagements - Math.round((maxNumberEngagements/7)*position))
      		.call(yAxis());
};

function yAxis () {
	return d3.svg.axis()
    	.orient("left");
};

// Cretae axis titles

function xAxisTitle (title){
	return setSvgSize.append("text")
        .attr("transform",
              "translate(" + (width/2) + " ," + 
                             (height) + ")")
        .attr("class", "xAxisTitle")
        .style("text-anchor", "middle")
        .text(title);
}

function yAxisTitle (){
	return setSvgSize.append("text")
       .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("x", margin.top - (height / 2))
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .attr("class", "yAxisTitle")
        .text("Engagements");
}











	
	

