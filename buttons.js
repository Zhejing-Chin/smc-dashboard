const metrics = ["followergrowth", "ssov", "mentions", "retweets", "amplification", "applause", "tophashtag", "topmention"]
const period = ["chartdaily", "chartweekly"]
const options = document.querySelectorAll(".bar-grey .option");
const options2 = document.querySelectorAll(".bar-grey .option2");
var choose = 0;

let current = 1;

function show_images(choose) {
    console.log(choose)
    // daily / weekly option
    if (choose !== 0) {
        chose = choose-1;
        if (chose === 1) {
            unchose = 0;
        } else {
            unchose = 1;
        }
        console.log(chose, unchose)
        a = document.getElementsByClassName(period[chose]);
        b = document.getElementById(period[chose]);
        c = document.getElementsByClassName(period[unchose]);
        d = document.getElementById(period[unchose]);

        if (metrics[current-1] === "retweets") {
            console.log(b, d)
        }

        // console.log(a, b, c, d)

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
console.log(metrics[current-1])

show_images(choose)

options2.forEach((option, i) => (option.index = i + 1));
options2.forEach(option =>
    option.addEventListener("click", function() {
choose = option.index;
if (metrics[current-1] === "retweets") {
    choose = choose - 2;
}
console.log("option index", choose)

show_images(choose)

}));



}));

