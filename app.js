// let speech = new SpeechSynthesisUtterance();
// let voices = [];
// let voiceSelector = document.querySelector("select");

// function populateVoiceList() {
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0]; 

//     voiceSelector.innerHTML = '';

//     voices.forEach((voice, i) => {
//         let option = new Option(`${voice.name} (${voice.lang})`, i);
//         voiceSelector.add(option);
//     });
// }

// populateVoiceList();
// if (speechSynthesis.onvoiceschanged !== undefined) {
//     speechSynthesis.onvoiceschanged = populateVoiceList;
// }

// voiceSelector.addEventListener("change", () => {
//     speech.voice = voices[voiceSelector.value];
// });

// // Add event listener for button click to speak the text
// document.querySelector("button").addEventListener("click", () => {
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });


let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelector = document.querySelector("select");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; 

    voiceSelector.innerHTML = '';

    voices.forEach((voice, i) => {
        let option = new Option(`${voice.name} (${voice.lang})`, i);
        voiceSelector.add(option);
    });
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

voiceSelector.addEventListener("change", () => {
    speech.voice = voices[voiceSelector.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
