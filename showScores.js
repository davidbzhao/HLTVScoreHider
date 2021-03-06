var resultsWon = document.querySelectorAll("[data-result='result-won']");
var resultsLost = document.querySelectorAll("[data-result='result-lost']");
var resultsScores = document.getElementsByClassName('result-score');

Array.from(resultsWon).map(result => {
    result.classList.add("result-won");
    result.dataset.result = "result-won";
});

Array.from(resultsLost).map(result => {
    result.classList.add("result-lost");
    result.dataset.result = "result-lost";
});

Array.from(resultsScores).map(score => {
    score.style.visibility = "visible";
});


var divTeam = document.querySelectorAll('.match-page div.team');

Array.from(divTeam).map(el => {
	let scores = el.querySelectorAll('.team > div > div');
	Array.from(scores).map(score => {
		score.style.visibility = 'visible';
    });
});