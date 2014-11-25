var width = 450;
var height = 200;
var Data = [];
var maxNumberEngagements;
var setSvgSize = d3.select(".chart")
		.attr("width", width)
		.attr("height", height);

// load data and draw graph
d3.tsv("data/datamuduno.tsv", function(data) {	
	// console.log(data)
		 Data = d3.nest()
		.key(function(d) { return d.date; })
		.entries(data);
		console.log(Data);

 		maxNumberEngagements = d3.max(Data, function(d) { return (d.values.length - 1); });

		setPath();
		addXaxis();
		addYaxis();		
});

// set line graph path
function setPath () {
	return setSvgSize.append("path")
		.datum(Data)
		.attr("class","line")
		.attr("d", pathLine())
		
};

function pathLine () {
		return d3.svg.line()
			.x(function(d,i){return ((width - 100) / (Data.length -1)) * (i+ 1);})
			.y(function(d){return scaleY()(d.values.length);})
};		
 		
function scaleY () {
		return d3.scale.linear()
		.domain([0, maxNumberEngagements])
    	.range([height, 0]);
};

// format and insert xAxis
function addXaxis () {
	return setSvgSize.selectAll("svg")
			.data(Data)
			.enter().append("g")
			.attr("class", "axis")
      		.attr("transform", function(d,i){return "translate(" + ((width / (Data.length - 1)) * (i+1)) + ","+ (height - 40) +")";})
      		.append("text")
      		.attr("dy", ".71em")
      		.style("text-anchor", "end")
      		.text(function(d){return d.key})
      		.call(xAxis());
};

function xAxis() {
	return d3.svg.axis()
		.orient("bottom");
}



// format and insert yAxis



function addYaxis () {
	return setSvgSize.selectAll("svg")
			.data(Data)
			.enter().append("g")
			.attr("class", "axis")
      		.attr("transform", function(d,i){return "translate(50," + ((height / (Data.length - 1)) * i) +")";})
      		.append("text")
      		.attr("dy", ".71em")
      		.style("text-anchor", "end")
      		.text(function(d,i){return maxNumberEngagements - Math.round((maxNumberEngagements/(Data.length - 2))* i)})
      		.call(yAxis());
};

function yAxis () {
	return d3.svg.axis()
    	.orient("left");
};





	
	

