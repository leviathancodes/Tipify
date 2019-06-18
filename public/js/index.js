
let result = document.getElementById('finalCalculation');
let reset = document.getElementById("reset");
reset.addEventListener("click", resetResult);

function tip() {
  let bill = parseInt(document.getElementById('bill').value);
  let people = parseInt(document.getElementById('people').value);
  let percentage = parseInt(document.getElementById('tips').selectedOptions[0].innerHTML.slice(-3));

  // If the user does not enter a price, then a warning message will appear.
  if(isNaN(bill)) {
    let warning = "Please enter the price of your bill.";
    return result.innerHTML = warning;
  }

  // If the user does not enter how many are sharing the bill, then a warning message will appear.
  if(isNaN(people)) {
    let warning = `Please enter how many are sharing the bill.  If one, enter "1".`
    return result.innerHTML = warning;
  }

    //If people is not equal to one, text will be "X per person"
    if (people !== 1){
      let calc = ('Your tip comes to: ' + '$' + parseFloat((percentage/100*bill)/people).toFixed(2) + " per person");
     result.innerHTML = calc;
      // Else it will only display the dollar amount
    } else {
      let calc = ('Your tip comes to: ' + '$' + parseFloat((percentage/100*bill)/people).toFixed(2));
      return result.innerHTML = calc;
    }
};
/* This should return the result to blank
    and reset all form data
*/
function resetResult() {
    let blank = "";
   return result.innerHTML = blank;
};