const metrics = ["followergrowth", "ssov", "mentions", "retweets", "amplification", "applause", "tophashtag", "topmention"]
const period = ["chartdaily", "chartweekly"]
const options = document.querySelectorAll(".bar-grey .option");
const options2 = document.querySelectorAll(".bar-grey .option2");
var choose = 0;

let current = 1;

function show_images(choose) {
    // daily / weekly option
    if (choose !== 0) {
        chose = choose-1;
        if (chose === 1) {
            unchose = 0;
        } else {
            unchose = 1;
        }
        // button - metrics
        a = document.getElementsByClassName(period[chose]);
        c = document.getElementsByClassName(period[unchose]);

        // button - daily, weekly
        b = document.getElementById(period[chose]);
        d = document.getElementById(period[unchose]);
        if (metrics[current-1] === "retweets") {
            b = document.getElementById(period[chose]+"1");
            d = document.getElementById(period[unchose]+"1");
        }
        
        for (j = 0; j < a.length; j++) {
            a[j].style.display = "block";
        }

        b.style.border = "3px solid navy";
        b.style.borderRadius = "25px";
 
        for (j = 0; j < c.length; j++) {
            c[j].style.display = "none";
        }

        if (d.style !== null) {
            d.style.border = "0px";
        }
        
    }

    // metrics option
    for (i = 0; i < metrics.length; i++) {
        if (i !== current-1) {
            x = document.getElementsByClassName(metrics[i]);
            y = document.getElementById(metrics[i]);
            
            if (y.style !== null) {
                y.style.border = "0px";
            }
        
            for (j = 0; j < x.length; j++) {
                x[j].style.display = "none";
            }
        } else {
            
            x = document.getElementsByClassName(metrics[i]);
            y = document.getElementById(metrics[i]);

            y.style.border = "5px solid purple";
            y.style.borderRadius = "25px";

            for (j = 0; j < x.length; j++) {
                x[j].style.display = "block";
            }
        }
    }
    choose = 0;
}

show_images(choose)

options.forEach((option, i) => (option.index = i + 1));
options.forEach(option =>
                option.addEventListener("click", function() {

current = option.index;
if (metrics[current-1] === "mentions" || metrics[current-1] === "retweets"){
    choose = 1
}
show_images(choose)


options2.forEach((option, i) => (option.index = i + 1));
options2.forEach(option =>
    option.addEventListener("click", function() {
choose = option.index;
if (metrics[current-1] === "retweets") {
    choose = choose - 2;
}

show_images(choose)

}));

}));

d3.csv("csv/new_top_hashtags.csv", function(error, myData) {
    if (error) {
        console.log("Had an error loading file.");
    }
    // We'll be using simpler data as values, not objects.
    var myArray = [];
    myData.forEach(function(d, i){
        // Add a new array with the values of each:
        myArray.push([d.Brand, d.Hashtags, d.Tweets]);
    });
    console.log(myData);
    console.log(myArray);
    
    // You could also have made the new array with a map function!
    //using colors and fonts from the UNICEF Style Guide
    var table = d3.select("#table1").append("table")
    .attr("id", "keywords")
    .attr("cellspacing", 0)
    .attr("cellpadding", 0);
    var header = table.append("thead").append("tr");
    header
            .selectAll("th")
            .data(["Brands", "Hashtags", "Tweets"])
            .enter()
            .append("th")
            .append("span")
            .text(function(d) { return d; });
    var tablebody = table.append("tbody");
    rows = tablebody
            .selectAll("tr")
            .data(myArray)
            .enter()
            .append("tr");
    // We built the rows using the nested array - now each row has its own array.
    cells = rows.selectAll("td")
        // each row has data associated; we get it and enter it for the cells.
            .data(function(d) {
                console.log(d);
                return d;
            })
            .enter()
            .append("td")
            .text(function(d) {
                return d;
            });
});

d3.csv("csv/new_top_mentions.csv", function(error, myData) {
    if (error) {
        console.log("Had an error loading file.");
    }
    // We'll be using simpler data as values, not objects.
    var myArray = [];
    myData.forEach(function(d, i){
        // Add a new array with the values of each:
        myArray.push([d.Brand, d.Mentions, d.Tweets]);
    });
    console.log(myData);
    console.log(myArray);
    
    // You could also have made the new array with a map function!
    //using colors and fonts from the UNICEF Style Guide
    var table = d3.select("#table2").append("table")
    .attr("id", "keywords")
    .attr("cellspacing", 0)
    .attr("cellpadding", 0);
    var header = table.append("thead").append("tr");
    header
            .selectAll("th")
            .data(["Brands", "Mentions", "Tweets"])
            .enter()
            .append("th")
            .append("span")
            .text(function(d) { return d; });
    var tablebody = table.append("tbody");
    rows = tablebody
            .selectAll("tr")
            .data(myArray)
            .enter()
            .append("tr");
    // We built the rows using the nested array - now each row has its own array.
    cells = rows.selectAll("td")
        // each row has data associated; we get it and enter it for the cells.
            .data(function(d) {
                console.log(d);
                return d;
            })
            .enter()
            .append("td")
            .text(function(d) {
                return d;
            });
});
