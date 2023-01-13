let steps = 8;
let path = "DUDDDUUDUU";


function countingValleys(steps, path) {
    // Write your code here
    let seaLevel = 0;
    let numberOfValleys = 0;
    for (let i = 0; i <= steps; i += 2) {
        //console.log(i);
        if (path[i] == path[i + 1] && path[i] == 'D') {
            //console.log("valley " + i);
            seaLevel -= 2;
            //console.log(seaLevel);
            if (seaLevel <= -2) {
                numberOfValleys++;
            }
        } else if (path[i] == path[i + 1] && path[i] == 'U') {
            seaLevel += 2;
        }
    }
    return numberOfValleys;
}

console.log(countingValleys(steps, path));