function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "You are a professional cook renowned for your expertise in crafting quick and easy recipes; your challenge is to create a delectable dish in basic HTML that combines simplicity with gourmet flair. This recipe should cater to the busy lives of your audience, emphasizing ingredients that are both accessible and nutritious. The format of your recipe should be straightforward, guiding readers through each step with clarity and precision to ensure a successful culinary experience. Start by listing the ingredients and separate each ingredient with a <br />. Then, in a new paragraph <p>, proceed with a step-by-step cooking method, ensuring each direction is concise yet detailed enough to follow without confusion and in a different line <br />. Conclude your recipe in a new paragraph <p> with a note on how to enjoy the dish best, suggesting pairings or variations. Present this recipe in a clean, engaging format, making it a go-to option for your audience seeking culinary inspiration without the time commitment.";
  let prompt = `User instructions: Create an easy recipe of ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a ${instructionsInput.value}'s recipe.</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
