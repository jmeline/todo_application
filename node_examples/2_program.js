
// console.log(process.argv);

var elements = process.argv;

var i;
var sum = 0;
for (i = 2; i < elements.length; i++)
{
    sum += Number(elements[i]);
    // console.log(elements[i]);    
}
console.log(sum);

/*

// Official Solution // 
var result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)

*/
