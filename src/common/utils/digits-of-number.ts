export default function digitsOfNumber(num: number) {
  const numberInString = num.toString()
   
  let digits: number[]= []

  for (let i = 0; i < numberInString.length; i++) {
   digits.push(parseInt(numberInString[i])) 
  }

  return digits
}