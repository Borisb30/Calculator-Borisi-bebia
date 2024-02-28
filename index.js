//ღილაკები ერთ ცვლადიში
const button = document.querySelectorAll("button");

//input-ს ველის მნიშვბელობა ცვლადში
const result = document.getElementById("result");
//for -ციკლი სწორი ღილაკის დასაჭერად
for (let i = 0; i < button.length; i++) {
  //სწორ ღილაკზე დაჭერის გაგება
  button[i].addEventListener("click", () => {
    //ღილაკის მნიშვნელობის გაგება
    const buttonValue = button[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}
// კალკულატორის მნიშვნელობის გასასუფთავებელი ფუნქცია C -ზე დაჭერისას
function clearResult() {
  result.value = "";
}
// კალკულატორის = -ზე დაჭერისას შეკრების ფუნქცია
function calculateResult() {
  result.value = eval(result.value);
}
// ღილაკებზე დაჭერის გაგება
function appendValue(buttonValue) {
  let stringValue = result.value.toString();
  let lastValueCharacter = stringValue.charAt(stringValue.length - 1);
  const operators = ['+', '-', '*', '/'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (stringValue === '' && operators.includes(buttonValue)) {
    return;
  }
  if (operators.includes(lastValueCharacter)) {
    if (numbers.includes(buttonValue)) {
      result.value = result.value + buttonValue;
    }
  } else {
    result.value = result.value + buttonValue;
  }
}
