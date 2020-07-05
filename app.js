let userScore=0;
let computerScore=0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".dcore-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices =['r', 'p', 's'];
	const x = Math.floor(Math.random()*3);
	return choices[x];	
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	
	switch(userChoice){
		case "r":
			if (computerChoice=="r") {
				result_p.innerHTML="Roca(usuari) és igual a Roca(ordinador). És un empat";
				rock_div.classList.add("choice_draw");
				setTimeout(function(){rock_div.classList.remove('choice_draw')},300);

			}else if (computerChoice=="p") {
				result_p.innerHTML="Roca(usuari) perd contra a Paper(ordinador). Has perdut";
				computerScore++;
				computerScore_span.innerHTML=computerScore;
				rock_div.classList.add("choice_loose");
				setTimeout(function(){rock_div.classList.remove('choice_loose')},300);

			}else{
				result_p.innerHTML="Roca(usuari) guany a Tisores(ordinador). Has guanyat";
				userScore++;
				userScore_span.innerHTML=userScore;
				rock_div.classList.add("choice_win");
				setTimeout(function(){rock_div.classList.remove('choice_win')},300);

			}
		break;
		case "p":
			if (computerChoice=="p") {
				result_p.innerHTML="Paper(usuari) és igual a Paper(ordinador). És un empat";
				paper_div.classList.add("choice_draw");
				setTimeout(function(){paper_div.classList.remove('choice_draw')},300);
			}else if (computerChoice=="s") {
				result_p.innerHTML="Paper(usuari) perd contra Tisores(ordinador). Has perdut";
				paper_div.classList.add("choice_loose");
				setTimeout(function(){paper_div.classList.remove('choice_loose')},300);
				computerScore++;
				computerScore_span.innerHTML=computerScore;
			}else{
				result_p.innerHTML="Paper(usuari) guanya contra Roca(ordinador). Has guanyat";
				paper_div.classList.add("choice_win");
				setTimeout(function(){paper_div.classList.remove('choice_win')},300);
				userScore++;
				userScore_span.innerHTML=userScore;
			}
			break;
			case "s":	
			if (computerChoice=="s") {
				result_p.innerHTML="Tisores(usuari) és igual a Tisores(ordinador). És un empat";
				sissors_div.classList.add("choice_draw");
				setTimeout(function(){sissors_div.classList.remove('choice_draw')},300);

			}else if (computerChoice=="p") {
			result_p.innerHTML="Tisores(usuari) guanya a Paper(ordinador). Has guanyat";
				sissors_div.classList.add("choice_win");
				setTimeout(function(){sissors_div.classList.remove('choice_win')},300);
				userScore++;
				userScore_span.innerHTML=userScore;

			}else{
				result_p.innerHTML="Tisores(usuari) perd contra Roca(ordinador). Has perdut";
				sissors_div.classList.add("choice_loose");
				setTimeout(function(){sissors_div.classList.remove('choice_loose')},300);
				computerScore++;
				computerScore_span.innerHTML=computerScore;
			}
	}
};


function main(){
	rock_div.addEventListener('click', function(){
		game("r");
	});

	paper_div.addEventListener('click', function(){
		game("p");

	});

	sissors_div.addEventListener('click', function(){
		game("s");

	});
};


main();

