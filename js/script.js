// Random words
const words1 = ["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"];
const words2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const words3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const words4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const words5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

const words = [words1, words2, words3, words4, words5];

// Getting elements from the DOM
const storyOutput = document.querySelector("#story-output");
const buttons = document.querySelectorAll(".word-btn");
const generateStory = document.querySelector("#generate-story");
const generateRandomStory = document.querySelector("#generate-random-story");
const resetStory = document.querySelector("#reset-story");

// Helper function to obtain a random word
function getRandomWord(wordsArray) {
  const randomIndex = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[randomIndex];
}

// Add event listeners to buttons
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let word;
    word = getRandomWord(words[index]);
    button.textContent = word;
  });
});

// Generate Story
generateStory.addEventListener("click", () => {
  let story = [];
  buttons.forEach((button) => {
    story.push(button.textContent);
  });
  story = story.join(" ");
  storyOutput.textContent = story;
});

// Generate Random Story
generateRandomStory.addEventListener("click", () => {
  const story = words.map((words) => getRandomWord(words)).join(" ");
  storyOutput.textContent = story;
});

// Reset Story
resetStory.addEventListener("click", () => {
  buttons.forEach((button, index) => {
    button.textContent = `Word ${index + 1}`;
  });
  storyOutput.textContent = ""
});
