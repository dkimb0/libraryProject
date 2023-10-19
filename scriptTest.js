let score = function(){
    let points = 0;

    return function(){
        points += 1;
        return points;
    }
}();

console.log(score());
console.log(score());
console.log(score());