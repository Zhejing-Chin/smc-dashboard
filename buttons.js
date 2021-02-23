const metrics = ["followergrowth", "ssov", "mentions", "retweets", "amplification", "applause", "tophashtag", "topmention"]
const options = document.querySelectorAll(".bar-grey .option");
let current = 1;

function show_images() {
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
}

show_images()

options.forEach((option, i) => (option.index = i + 1));
options.forEach(option =>
                option.addEventListener("click", function() {

current = option.index;
console.log(metrics[current-1])
show_images()

}
));