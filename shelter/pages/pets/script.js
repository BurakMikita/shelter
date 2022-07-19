import arr from './pets.json' assert {type: 'json'}



window.addEventListener('resize', function () {
	"use strict";
	window.location.reload();
});


const createCardTemplate = () => {
	const card = document.createElement("div");
	card.classList.add("card");
	return card;
}
const too = (n) => {

	return `
	
	<a class="hover__action"  id="${n.id}" href="#openModali">
  <div class="card__img"><img src=${n.img}></div>
  <div class="card__name">
	  <p>${n.name}</p>
  </div>
  <div class="card__button"><button><span>Learn more</span></button></div>
  </a>
  
`

}















const btn_next = document.getElementById("next__page");
const btn_prev = document.getElementById("btn_prev");
const first_pag = document.getElementById("first_pag");
const last_page = document.getElementById("last_page");
btn_next.addEventListener('click', nextPage);
btn_prev.addEventListener('click', prevPage);
first_pag.addEventListener('click', firstPag);
last_page.addEventListener('click', lastPage);


let records_per_page = 0
if (document.documentElement.clientWidth > 1279) {
	records_per_page = 8
} else if (document.documentElement.clientWidth > 769) {
	records_per_page = 6
} else if (document.documentElement.clientWidth > 0) {
	records_per_page = 3
}

function lastPage() {
	current_page = numPages()
	changePage(current_page)
}

function firstPag() {
	current_page = 1
	changePage(current_page)
}

function prevPage() {
	if (current_page > 1) {
		current_page--;
		changePage(current_page);
	}
}

function nextPage() {
	if (current_page < numPages()) {
		current_page++;
		changePage(current_page);
	}
}


var current_page = 1;




function numPages() {


	//количество пользователей и размер страниц
	return Math.ceil(arr.length / records_per_page);
}


function changePage(page) {

	const sliderCards = document.querySelector("#slider__cards")
	const page_span = document.getElementById("page");


	// валидация что бы не было ни больше не меньше
	if (page < 1) page = 1;
	if (page > numPages()) page = numPages();




	sliderCards.innerHTML = "";
	let changedItem = sliderCards;

	page_span.innerHTML = page;

	if (page == numPages()) {
		btn_next.classList.add('nowork');
		last_page.classList.add('nowork');
		btn_prev.classList.remove('nowork');
		first_pag.classList.remove('nowork');


	}
	else {
		btn_next.classList.remove('nowork');
		last_page.classList.remove('nowork');

	}

	let arrRandom = []

	for (let i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {

		arrRandom.push(i)
		if (arrRandom.length == records_per_page) {
			arrRandom.sort(() => Math.random() - 0.5);
			for (let j = 0; j < arrRandom.length; j++) {

				const card = createCardTemplate();
				card.innerHTML = too(arr[arrRandom[j]]);
				changedItem.appendChild(card);

			}
		}





	}
	if (page == 1) {
		btn_prev.classList.add('nowork');
		first_pag.classList.add('nowork');


	} else {
		btn_prev.classList.remove('nowork');
		first_pag.classList.remove('nowork');
	}

	document.addEventListener('click', e => closeModal(e))
	const link = document.querySelectorAll('a[href*="openModali"]')
	console.log(link)
	link.forEach((el) => {
		el.addEventListener('click', serxhLink)
	})

}










window.onload = function () {
	changePage(current_page);
};










const closeMenu = () => {
	check.checked = false
	let funDiv = document.getElementById('fun')
	funDiv.remove()
	document.body.classList.remove('disabale__scroll')

}
const check = document.getElementById("check-menu")






check.addEventListener('change', function () {
	if (this.checked) {
		const fun = document.createElement("div");
		document.body.classList.add('disabale__scroll')
		fun.classList.add("fun");
		fun.setAttribute('id', 'fun');
		document.body.appendChild(fun);
		fun.addEventListener('click', deleteFun)
		console.log("Checkbox is checked..");
	} else {
		let el = document.getElementById('fun');
		el.remove()
		document.body.classList.remove('disabale__scroll')

		console.log("Checkbox is not checked..");
	}
});







let div = document.querySelector("div .main__menu")
var matches = div.querySelectorAll('a');

matches.forEach((el) => {
	el.addEventListener("click", closeMenu)


})


const addModal = document.getElementById('add__modal')



function serxhLink() {


	const number = this.getAttribute("id")
	console.log(number)
	const fun = document.createElement("div");
	fun.classList.add("fun");
	fun.setAttribute('id', 'fun');
	document.body.appendChild(fun);
	fun.addEventListener('click', deleteFun)
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].id == number) {
			console.log(arr[i].id)


			let text = `	<div id="openModal" class="modal">
		 <div class="modal__content">
					 <div class="modal__img">
						 <img src=${arr[i].img}>
					 </div>
					 <div class="modal__text">
						 <div class="text__name"><p>${arr[i].name}</p></div>
						 <div class="text__breed"><p>${arr[i].breed}</p></div>
						 <div class="text__description"><p>${arr[i].description}</p></div>
								<div  class="text__list" >
									<ul>
										<li><b>Age:</b> ${arr[i].age}</li>
										<li><b>Inoculations:</b> ${arr[i].inoculations.join(', ')}</li>
										<li><b>Diseases:</b> ${arr[i].diseases.join(', ')}</li>
										<li><b>Parasites:</b> ${arr[i].parasites.join(', ')}</li> 
									</ul>
								</div>
					 </div>
		 </div>
		 <a class="cross__close"  href="#close" id="close" >&#10006;</a>
		 </div>`

			addModal.innerHTML += text
			document.body.classList.add('disabale__scroll')

		}

	}
}


const closeModal = (e) => {

	let el = e.target.getAttribute('id')
	if (el === 'close') {
		let funDiv = document.getElementById('fun')
		document.body.classList.remove('disabale__scroll')

		funDiv.remove()
		addModal.innerHTML = ''


	}

}











const deleteFun = () => {
	let funDiv = document.getElementById('fun')
	document.body.classList.remove('disabale__scroll')
	funDiv.remove()
	addModal.innerHTML = ''
	check.checked = false

}


