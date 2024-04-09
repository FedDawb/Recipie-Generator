function displayNewText(response) {
    const typewriter = new Typewriter ('#newtext', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    }); 

      typewriter.typeOut(response.data.answer)
       .then(() => {
            // Add a delay before removing the cursor
            setTimeout(() => {
                typewriter.removeCursor();
            }, 1000);
        });
}


function generateForm(event) {
    event.preventDefault();
    let instructionInput = document.querySelector("#user-instructions");
    let apiKey = "35b0bf31b34b9e454tb8c221d0a92o09";
    let prompt = `User instructions: Generate an easy to follow recipe about ${instructionInput.value}`
    let context = "You are an expert chef who uses leftover ingredients to make healthy and nutricious meals for people on low income. Generate a recipe with the ingredients provided by the user. Your mission is to generate east to follow, easy to read in basic HTML. Please follow user instructions and generate a different recipe each time. Include a centered recipe title please";
    
    
    
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    let newTextElement = document.querySelector("#newtext");
    newTextElement.classList.remove("hidden");
    newTextElement.innerHTML = `<div class ="generating"> This may take a couple of minutes, we are creating a miraculous meal with your leftovers.... ${instructionInput.value}.....</div>`


    axios.get(apiUrl).then(displayNewText);
}


let generateFormElement = document.querySelector("#generate-form");
generateFormElement.addEventListener('submit', generateForm);
