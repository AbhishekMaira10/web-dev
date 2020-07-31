var a = 10;
console.log(a);

/* This does not give a runtime error as even though response does not have a property method directly
to it, but in js we can access a property that doesn't exist on an object
 */

function getHumanReadableMessage(response) {
  if (response.data.hasSuceeded)
    return "Yay your action succeeded because: " + response.message; // bug

  return "Oops, something went wrong";
}

const apiResponse = {
  data: {
    hasSuceeded: true,
    message: "Successful log in",
  },
};

console.log(getHumanReadableMessage(apiResponse)); // output: Yay your action succeeded because: undefined
