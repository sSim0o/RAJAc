// Données fictives pour les résultats des derniers matches
const recentMatches = [
    { opponent: "AS FAR", score: "2-1", result: "Victoire" },
    { opponent: "Wydad AC", score: "1-1", result: "Nul" },
    { opponent: "KAC Marrakech", score: "3-0", result: "Victoire" },
    { opponent: "Hassania Agadir", score: "0-2", result: "Défaite" }
];

// Données fictives pour le pronostic du prochain match
const nextMatchForecast = {
    opponent: "Olympique Safi",
    date: "15 Décembre 2023",
    probabilities: {
        victoire: 60,
        nul: 25,
        defaite: 15
    }
};

// Fonction pour afficher les résultats
function displayResults() {
    const container = document.getElementById('match-results');
    recentMatches.forEach(match => {
        const div = document.createElement('div');
        div.className = 'match';
        div.innerHTML = `
            <h4>Raja vs ${match.opponent}</h4>
            <p>Score: ${match.score}</p>
            <p>Résultat: ${match.result}</p>
        `;
        container.appendChild(div);
    });
}

// Fonction pour afficher le pronostic
function displayForecast() {
    const container = document.getElementById('next-match-forecast');
    const div = document.createElement('div');
    div.className = 'forecast';
    div.innerHTML = `
        <h4>Prochain Match: Raja vs ${nextMatchForecast.opponent}</h4>
        <p>Date: ${nextMatchForecast.date}</p>
        <p>Pronostic (basé sur données fictives):</p>
        <ul>
            <li>Victoire: ${nextMatchForecast.probabilities.victoire}%</li>
            <li>Nul: ${nextMatchForecast.probabilities.nul}%</li>
            <li>Défaite: ${nextMatchForecast.probabilities.defaite}%</li>
        </ul>
    `;
    container.appendChild(div);
}

// Charger les données au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    displayResults();
    displayForecast();
});
