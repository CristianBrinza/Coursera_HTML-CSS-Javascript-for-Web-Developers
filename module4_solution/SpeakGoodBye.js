// Wrap in IIFE and expose 'byeSpeaker' to the global scope
(function (window) {
    const speakWord = "Good Bye";

    const byeSpeaker = {
        speak: function (name) {
            const message = `${speakWord} ${name}`;
            console.log(message);
        },
        speakSimple: function (name) {
            return `${speakWord} ${name}`;
        }
    };

    window.byeSpeaker = byeSpeaker;
})(window);
