// Assignment 1 | COMP1073 Client-Side JavaScript
// Karan Gill 
// 200550743
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");
const addStudentIdButton = document.getElementById("addStudentId");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const resetButton = document.getElementById("reset");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1Array = ["The turkey", "Mom", "Dad", "The dog", "My teacher","The elephant","The cat"];
const verbsArray = ["sat on", "ate", "danced with", "saw", "doesnt like","kissed"];
const adjectivesArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking","a fat"];
const nouns2Array = ["goat", "monkey", "fish", "cow", "frog","bug","worm"];
const settingsArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup","on the grass","in my shoes"];

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    choosenNoun1.textContent = getRandomElement(nouns1Array);
}

function verb_on_click() {
    choosenVerb.textContent = getRandomElement(verbsArray);
}

function adjective_on_click() {
    choosenAdjective.textContent = getRandomElement(adjectivesArray);
}

function noun2_on_click() {
    choosenNoun2.textContent = getRandomElement(nouns2Array);
}

function setting_on_click() {
    choosenSetting.textContent = getRandomElement(settingsArray);
}

function addStudentId_on_click() {
    const studentIdElement = document.getElementById("studentId");
    studentIdElement.textContent = "Student ID: 200550743" ; 
    studentIdElement.style.fontSize="1rem"
    studentIdElement.style.fontWeight="bold"
    studentIdElement.style.color = "red";
}

// concatenate the user story and display
function playback_on_click() {
    let story = "";

    // Check if each part of the story is selected
    if (choosenNoun1.textContent !== "" &&
        choosenVerb.textContent !== "" &&
        choosenAdjective.textContent !== "" &&
        choosenNoun2.textContent !== "" &&
        choosenSetting.textContent !== "") {
        // If all parts are selected, concatenate the story
        story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}.`;
    } else {
        // If any part is not selected, display an error message
        story = "Please select all parts of the story.";
    }

    storyDisplay.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1 = getRandomElement(nouns1Array);
    const randomVerb = getRandomElement(verbsArray);
    const randomAdjective = getRandomElement(adjectivesArray);
    const randomNoun2 = getRandomElement(nouns2Array);
    const randomSetting = getRandomElement(settingsArray);
    
    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}.`;
    storyDisplay.textContent = randomStory;
}

// reset all choices and story
function reset_on_click() {
    choosenNoun1.textContent = "";
    choosenVerb.textContent = "";
    choosenAdjective.textContent = "";
    choosenNoun2.textContent = "";
    choosenSetting.textContent = "";
    storyDisplay.textContent = "";
}

// helper function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* Event Listeners */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
addStudentIdButton.addEventListener("click", addStudentId_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
resetButton.addEventListener("click", reset_on_click);




// reset all choices and story
function reset_on_click() {
    choosenNoun1.textContent = "";
    choosenVerb.textContent = "";
    choosenAdjective.textContent = "";
    choosenNoun2.textContent = "";
    choosenSetting.textContent = "";
    storyDisplay.textContent = "";
    
    // Clear student ID
    const studentIdElement = document.getElementById("studentId");
    studentIdElement.textContent = "";
}














