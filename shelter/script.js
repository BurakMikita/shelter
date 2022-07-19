




window.addEventListener('resize', function () { 
	"use strict";
	window.location.reload(); 
});






if (window.location) {
	abutLink = document.getElementById('aboutshel')
	abutLink.classList.add('action__link')
}

const pets = [
	{
		"id": 1,
		"name": "Jennifer",
		"img": "./assets/images/pets-jennifer.png",
		"type": "Dog",
		"breed": "Labrador",
		"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		"age": "2 months",
		"inoculations": ["none"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 2,
		"name": "Sophia",
		"img": "./assets/images/pets-sophia.png",
		"type": "Dog",
		"breed": "Shih tzu",
		"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 month",
		"inoculations": ["parvovirus"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 3,
		"name": "Woody",
		"img": "./assets/images/pets-woody.png",
		"type": "Dog",
		"breed": "Golden Retriever",
		"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		"age": "3 years 6 months",
		"inoculations": ["adenovirus", "distemper"],
		"diseases": ["right back leg mobility reduced"],
		"parasites": ["none"]
	},
	{   "id": 4,
		"name": "Scarlett",
		"img": "./assets/images/pets-scarlet.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "3 months",
		"inoculations": ["parainfluenza"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{   "id": 5,
		"name": "Katrine",
		"img": "./assets/images/pets-katrine.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		"age": "6 months",
		"inoculations": ["panleukopenia"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{  "id": 6,
		"name": "Timmy",
		"img": "./assets/images/pets-timmy.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 3 months",
		"inoculations": ["calicivirus", "viral rhinotracheitis"],
		"diseases": ["kidney stones"],
		"parasites": ["none"]
	},
	{   "id": 7,
		"name": "Freddie",
		"img": "./assets/images/pets-freddie.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
		"inoculations": ["rabies"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{   "id": 8,
		"name": "Charly",
		"img": "./assets/images/pets-charly.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	},
	{   "id": 9,
		"name": "Каштан",
		"img": "./assets/images/pets-sophia.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	},
	{
		"name": "Пушистик",
		"img": "./assets/images/pets-katrine.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	},
	{
		"id": 3,
		"name": "Валет",
		"img": "./assets/images/pets-charly.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	}
]




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



const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const createCardTemplate = () => {
	const card = document.createElement("div");
	card.classList.add("card");
	return card;
}
const moveLeft = () => {
	CAROUSEL.classList.add("transition-left");
	BTN_LEFT.removeEventListener("click", moveLeft);
	BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
	CAROUSEL.classList.add("transition-right");
	BTN_LEFT.removeEventListener("click", moveLeft);
	BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
	let changedItem;
	if (animationEvent.animationName === "move-left") {
		CAROUSEL.classList.remove("transition-left");
		changedItem = ITEM_LEFT;
		document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
		const link = document.querySelectorAll('a[href*="openModali"]')
link.forEach((el) => {
	el.addEventListener('click', serxhLink)
})
	} else {
		CAROUSEL.classList.remove("transition-right");
		changedItem = ITEM_RIGHT;
		document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
		const link = document.querySelectorAll('a[href*="openModali"]')
link.forEach((el) => {
	el.addEventListener('click', serxhLink)
})
		
	}

	changedItem.innerHTML = "";
	let valuecCard = 0
	var arr = [];
	if (document.documentElement.clientWidth > 1279) {
		valuecCard = 3
	} else if (document.documentElement.clientWidth > 769) {
		valuecCard = 2
	} else if (document.documentElement.clientWidth > 0) {
		valuecCard = 1
	}
	while (arr.length < valuecCard) {
		var r = Math.floor(Math.random() * 10) + 1;
		if (arr.indexOf(r) === -1) arr.push(r);
	}

	for (let i = 0; i < arr.length; i++) {
		const card = createCardTemplate();
		card.innerHTML = too(pets[arr[i]]);
		changedItem.appendChild(card);
	}

	BTN_LEFT.addEventListener("click", moveLeft);
	BTN_RIGHT.addEventListener("click", moveRight);
})


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
		console.log("Checkbox is checked..");
		fun.addEventListener('click', deleteFun)
	} else {
		let el = document.getElementById('fun');
		el.remove()
		document.body.classList.remove('disabale__scroll')

		console.log("Checkbox is not checked..");
	}
});


let funDiv = document.getElementById('fun')





let div = document.querySelector("div .main__menu")
var matches = div.querySelectorAll('a');

matches.forEach((el) => {
	el.addEventListener("click", closeMenu)


})


   const addModal = document.getElementById('add__modal')
	console.log(addModal)

function serxhLink() {
	
 
	const number = this.getAttribute("id")
	const fun = document.createElement("div");
	fun.classList.add("fun");
	fun.setAttribute('id', 'fun');
	document.body.appendChild(fun);
	fun.addEventListener('click', deleteFun)
	for (let i = 0; i < pets.length; i++) {
		if (pets[i].id == number) {
			pets[i].inoculations.join(' ,')

			let text = `	<div id="openModal" class="modal">
		 <div class="modal__content">
					 <div class="modal__img">
						 <img src=${pets[i].img}>
					 </div>
					 <div class="modal__text">
						 <div class="text__name"><p>${pets[i].name}</p></div>
						 <div class="text__breed"><p>${pets[i].breed}</p></div>
						 <div class="text__description"><p>${pets[i].description}</p></div>
								<div  class="text__list" >
									<ul>
										<li><b>Age:</b> ${pets[i].age}</li>
										<li><b>Inoculations:</b> ${pets[i].inoculations.join(', ')}</li>
										<li><b>Diseases:</b> ${pets[i].diseases.join(', ')}</li>
										<li><b>Parasites:</b> ${pets[i].parasites.join(', ')}</li> 
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
  if(el === 'close'){
	let funDiv = document.getElementById('fun')
	document.body.classList.remove('disabale__scroll')

	funDiv.remove()
	addModal.innerHTML = ''
	
  
}

}






document.addEventListener('click', e => closeModal(e))
const link = document.querySelectorAll('a[href*="openModali"]')
link.forEach((el) => {
	el.addEventListener('click', serxhLink)
})




const deleteFun = () => {
	let funDiv = document.getElementById('fun')
	document.body.classList.remove('disabale__scroll')
	funDiv.remove()
   addModal.innerHTML = ''
	check.checked = false

}