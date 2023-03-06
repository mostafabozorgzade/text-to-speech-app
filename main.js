const textToSpeech = document.getElementById('text-to-speech');
const speakButton = document.getElementById('speak-button');
const voiceSelect = document.getElementById('voice-select');



const speech = new SpeechSynthesisUtterance();


function populateVoiceSelect() {
    const voices = window.speechSynthesis.getVoices();


    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = voice.name + voice.lang;
        voiceSelect.appendChild(option);
    });
}

populateVoiceSelect();



speakButton.addEventListener('click', () => {
    

    const selectedVoice = voiceSelect.value;
    speech.voice = window.speechSynthesis.getVoices()[selectedVoice];

    speech.text = textToSpeech.value;

    window.speechSynthesis.speak(speech);

});