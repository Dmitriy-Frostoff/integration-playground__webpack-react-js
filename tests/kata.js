/**
 * The full description is at
 *  {@link https://www.codewars.com/kata/583ade15666df5a64e000058 }
 *
 *
 * @param {number} num - positive integer
 * @returns {string} - if a number is even => convert it to binary,
 *    if a number is odd => convert it to hex
 *
 * @example
 *    evensAndOdds(2) => '10'
 *    evensAndOdds(13) => 'd'
 *    evensAndOdds(47) => '2f'
 *    evensAndOdds(0) => '0'
 *    evensAndOdds(12800) => '11001000000000'
 *    evensAndOdds(8172381723) => '1e71ca61b'
 */
export default function evensAndOdds(num) {
  return num % 2 === 0 ? num.toString(2) : num.toString(16);
}
