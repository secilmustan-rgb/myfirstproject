const story = {
    start: {
        text: "It is a snowy morning in Tokyo. Hachiko watches Professor Ueno leave for work. What does Hachiko do?",
        choices: [
            { text: "Walk him to the station", next: "station" },
            { text: "Stay home and nap", next: "home" }
        ]
    },
    station: {
        text: "Hachiko walks proudly to Shibuya Station. The Professor smiles and says 'See you at 3 PM!'",
        choices: [
            { text: "Wait at the station", next: "ending_wait" },
            { text: "Go explore the market", next: "ending_market" }
        ]
    },
    home: {
        text: "Hachiko stays home, but he feels lonely. He misses the Professor.",
        choices: [
            { text: "Run to the station anyway", next: "station" },
            { text: "Wait for the front door to open", next: "ending_home" }
        ]
    }
    // You can add endings like 'ending_wait' here!
};

function renderStory(node) {
    const gameContainer = document.body;
    gameContainer.innerHTML = `<h1>Hachiko: The Loyal Friend</h1>
                               <p>${story[node].text}</p>`;
    
    story[node].choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice.text;
        btn.onclick = () => renderStory(choice.next);
        gameContainer.appendChild(btn);
    });
}

// Start the game
renderStory('start');