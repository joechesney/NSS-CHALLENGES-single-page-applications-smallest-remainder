let print = "";

for (let i = 1; i <= 10; i++) {
    print += "Smallest number that " + i + " can be divided by with no remainder is ";
    for (let t = 1; t < 100; t++) {
        if ((t !== i) && (t%i === 0)) {
            print += t + ".<br>";
            break;
        }
        
    }

}

let divvy = document.getElementById("print");
divvy.innerHTML = print;