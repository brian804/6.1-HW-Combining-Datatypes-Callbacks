const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

//Every


//filter
const result = nums.filter(nums => nums < 4)
//console.log(result)

const even = panagram.filter(panagram => panagram.length % 2 === 0)
//console.log(even)


//find
const num = nums.find(element => element % 5 === 0)
//console.log(num)

const first = panagram.find(element => element.length > 5)
//console.log(first)


//find index
const num1 = (element) => element % 3 === 0;
//console.log(nums.findIndex(num1));


//for each
nums.forEach(element => {
    //console.log(element * 3)
})

panagram.forEach(element => {
    //console.log(`${element}!`);
});


//map
const mapNum = nums.map(x => x * 100);
// console.log(mapNum);

const mapPanagram = panagram.map(x => x.toUpperCase());
// console.log(mapPanagram);


// Some
const eleSeven = (element) => element % 7 === 0;
// console.log(nums.some(eleSeven));

const strA = (element) => element.includes('a');
// console.log(panagram.some(strA));