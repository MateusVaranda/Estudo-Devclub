const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item, index, arrayOriginal) => {
    console.log(item + ' -> item')
    console.log(index + ' -> index')
    console.log(arrayOriginal + ' - > arrayOriginal')
   return item * 2
})

console.log(double)