let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
function sort() {
    for (let i = 0, n = fruit.length; i < n; i++) {
        if (fruit[i] === "🍎") {
          appleShelf.textContent += "🍎";
        } else {
          orangeShelf.textContent += "🍊";
        }
    }   
}
sort();
