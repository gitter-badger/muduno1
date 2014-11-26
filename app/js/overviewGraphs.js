var width = $("svg").parent().width() - 200;
var margin = 100
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

				setPath();
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

				setPath();
				addXaxis();
				addYaxis();	
		});
};

// set line graph path
function setPath () {
	return setSvgSize.append("path")
		.datum(Data)
		.attr("class","line")
		.attr("d", pathLine())
};

function pathLine () {
		return d3.svg.line()
			.x(function(d,i){return ((((width - margin) / (Data.length - 1)) * i) + 50 );})
			.y(function(d){return scaleY()(d.values.length);})
};		
 		
function scaleY () {
		return d3.scale.linear()
		.domain([0, maxNumberEngagements])
    	.range([height, 0]);
};

// format and insert xAxis
function addXaxis (d) {
	return setSvgSize.selectAll("svg")
			.data(Data)
			.enter().append("g")
			.attr("class", "axis")
      		.attr("transform", function(d,i){return "translate(" + ((((width - margin) / (Data.length - 1)) * i) + 50 )+ ","+ (height - 10 ) +")";})
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
      		.attr("transform", "translate(50," + ((height / 7) * position) +")")
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





	
	

