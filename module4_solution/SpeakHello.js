// Wrap in IIFE and expose 'helloSpeaker' to the global scope
(function (window) {
    const speakWord = "Hello";

    const helloSpeaker = {
        speak: function (name) {
            const message = `${speakWord} ${name}`;
            console.log(message);
        },
        speakSimple: function (name) {
            return `${speakWord} ${name}`;
        }
    };

    window.helloSpeaker = helloSpeaker;
})(window);
