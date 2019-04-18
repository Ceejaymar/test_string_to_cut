const TestService = {};

/* 
  Check the string to make sure it is longer than 3 characters.
  Split the string into an array to use forEach.
  Keep a count to know when we reach the 3rd letter.
  If the current count modulo 3 is equal to 0, 
  the current letter is push to the output string.
  Return the output string at after the loop is done.
*/

TestService.create = (string_to_cut) => {
  if(string_to_cut.length < 3) {
    return 'Please enter a string longer than 3 characters'
  }

  let outputString = '';
  let count = 0

  string_to_cut.split('').forEach(letter => {
    count++
    count % 3 === 0 && (outputString += letter);
  })

  return outputString;
};

module.exports = TestService;