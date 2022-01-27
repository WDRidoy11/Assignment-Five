function highestScore(scores) {
    let max = scores[0];
    for (let x = 1; x < scores.length; x++) {
        if (max < scores[x]) {
            max = scores[x];
        }
    }
    return max;
}
let scores = [21, 28, 1, 78, 155];
let result = highestScore(scores);
console.log(result);