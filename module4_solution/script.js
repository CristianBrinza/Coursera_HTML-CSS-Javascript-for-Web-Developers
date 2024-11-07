(function () {
    const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    const outputDiv = document.createElement('div');
    document.body.appendChild(outputDiv);

    for (let name of names) {
        let firstLetter = name.charAt(0).toLowerCase();
        let message;
        let className;

        if (firstLetter === 'j') {
            message = byeSpeaker.speakSimple(name);
            className = 'goodbye';
        } else {
            message = helloSpeaker.speakSimple(name);
            className = 'hello';
        }

        // Display on UI
        const paragraph = document.createElement('p');
        paragraph.textContent = message;
        paragraph.classList.add(className);
        outputDiv.appendChild(paragraph);

        // Log to console
        console.log(message);
    }
})();
