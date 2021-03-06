var resultsWon = document.getElementsByClassName('result-won');
var resultsLost = document.getElementsByClassName('result-lost');
var resultsScores = document.getElementsByClassName('result-score');

Array.from(resultsWon).map(result => {
    result.classList.remove("result-won");
    result.dataset.result = "result-won";
});

Array.from(resultsLost).map(result => {
    result.classList.remove("result-lost");
    result.dataset.result = "result-lost";
});

Array.from(resultsScores).map(score => {
    score.style.visibility = "hidden";
});

var divTeam = document.querySelectorAll('.match-page div.team');

Array.from(divTeam).map(el => {
	let scores = el.querySelectorAll('.team > div > div');
	Array.from(scores).map(score => {
		score.style.visibility = 'hidden';
    });
});