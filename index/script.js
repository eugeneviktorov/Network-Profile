// Started Logo
window.onload = ev => {
	document.querySelector('.wrapper').style.opacity = 1;
	setTimeout(() => document.querySelector('.preload').classList.add('invisible'), 500)
}

// Block text one
function myFunction_one() {
	var copyText = document.getElementById("myInput_one");
	copyText.select();
	document.execCommand("copy");

	var tooltip = document.getElementById("myTooltip_one");
	tooltip.innerHTML = "Copied to clipboard";
}

function outFunc_one() {
	var tooltip = document.getElementById("myTooltip_one");
	tooltip.innerHTML = "Copy link";
}


// Block text two
function myFunction_two() {
	var copyText = document.getElementById("myInput_two");
	copyText.select();
	document.execCommand("copy");

	var tooltip = document.getElementById("myTooltip_two");
	tooltip.innerHTML = "Copied to clipboard";
}

function outFunc_two() {
	var tooltip = document.getElementById("myTooltip_two");
	tooltip.innerHTML = "Copy link";
}


// Block text three
function myFunction_three() {
	var copyText = document.getElementById("myInput_three");
	copyText.select();
	document.execCommand("copy");

	var tooltip = document.getElementById("myTooltip_three");
	tooltip.innerHTML = "Copied to clipboard";
}

function outFunc_three() {
	var tooltip = document.getElementById("myTooltip_three");
	tooltip.innerHTML = "Copy link";
}


// Block text four
function myFunction_four() {
	var copyText = document.getElementById("myInput_four");
	copyText.select();
	document.execCommand("copy");

	var tooltip = document.getElementById("myTooltip_four");
	tooltip.innerHTML = "Copied to clipboard";
}

function outFunc_four() {
	var tooltip = document.getElementById("myTooltip_four");
	tooltip.innerHTML = "Copy link";
}


// Switch language\
let eng = {
	// profile
	soled: '<b><p>Eugene Viktorov</p></b>',
	dored: '<p><i>Your world is constantly changing.</p></i><br>',
	loctte: '<p><b>Location:</b> Planet Earth / Russia, Omsk<br><br> <b>Skills:</b> web-design, web-developement, photography<br><br> <b>Date of creation:</b> April 28, 2022</p>',
	// profile


	// post 1
	amet_may: '<p>May 1, 2022</p>',
	lorem: '<p><b>About me:</b><br><br> I am currently studying computer science at an educational institution. Training specialty: "Programming in computer systems"<br><br> Participated in a small project VKNext (Tester)<br><br> Technologies I have worked with over the past year: HTML, CSS, JavaScript, Python.</p>',
	amet_edit_one: '<i><p>edited </i>15:11</p>',
	// post 1


	// post 2
	amet_june: '<p>June 29, 2022</p>',
	ipsum: '<p><b>My social networks:</b><br><br> <a href="https://t.me/eugeneviktorov" target="_blank">Telegram</a><br><br> <a href="https://github.com/eugeneviktorov" target="_blank">GitHub</a><br><br> <a href="https://dribbble.com/eugeneviktorov" target="_blank">Dribbble</a><br><br> <a href="https://www.figma.com/@eugeneviktorov" target="_blank">Figma</a><br><br> <a href="https://www.linkedin.com/in/eugeneviktorov" target="_blank">LinkedIn</a><br><br> <a href="mailto:e.viktorovvv@yandex.com" target="_blank">E-Mail</a></p>',
	amet_edit_two: '<p>23:21</p>',
	// post 2


	// post 3
	amet_august: '<p>August 24, 2022</p>',
	sits: '<p><b>My projects:</b><br><br> Creation of single-page websites in designer style with "Taplink" schematics.<br> Hand-crafted coding, and creating a unique design.<br><br> <a href="https://github.com/eugeneviktorov/Micfe" target="_blank">• Micfe (GitHub)</a><br><br> <a href="https://github.com/eugeneviktorov/Intonation" target="_blank">• Intonation (GitHub)</a><br><br> Program for learning the basics of computer graphics.<br><br> <a href="https://github.com/eugeneviktorov/RGBSchool" target="_blank">• RGBSchool (GitHub)</a></p>',
	amet_edit_three: '<p>05:06</p>',
	// post 3


	// post 4
	amet_october: '<p>October 26, 2022</p>',
	hacks: '<p><b>💻Online Hackathon "IT LAND Landing Design Hackathon"</b><br><br> Participated in a hackathon to create creative design and layout of the site using NoCode services.</br> Subject: IT Professional Handbook.<br><br> <a href="https://www.figma.com/community/file/1166069552938719525" target="_blank">Design link (Figma)</a><br><br> <a href="http://project6230265.tilda.ws/" target="_blank">Website link (Tilda)</a><br><br> <a href="https://www.linkedin.com/feed/update/urn:li:activity:6998854135307526144/" target="_blank">Post on LinkedIn</a></p>',
	amet_edit_four: '<i><p>edited </i>19:49</p>',
	// post 4


	tempor_link: 'Copy link',

	elitL: 'Light',
	elitD: 'Dark',

	orgaztn: '<p>© Network Profile<br> Eugene Viktorov<br> 2022-2023<br><br> e.viktorovvv@yandex<br> <a href="index/files/Terms Of Use.txt" target="_blank">Terms Of Use</a></p>',
};


let rus = {
	// profile
	soled: '<b><p>Евгений Викторов</p></b>',
	dored: '<p><i>Твой мир постоянно меняется.</p></i><br>',
	loctte: '<p><b>Местоположение:</b> Планета Земля / Россия, Омск<br><br> <b>Навыки:</b> web-дизайн, web-разработка, фотография<br><br> <b>Дата создания:</b> Апрель 28, 2022</p>',
	// profile


	// post 1
	amet_may: '<p>Май 1, 2022</p>',
	lorem: '<p><b>Обо мне:</b><br><br> В настоящее время я изучаю информатику в учебном заведении. Специальность подготовки: "Программирование в компьютерных системах"<br><br> Участвовал в небольшом проекте VKNext (Тестировщик)<br><br> Технологии, с которыми я работал за последний год: HTML, CSS, JavaScript, Python.</p>',
	amet_edit_one: '<i><p>edited </i>15:11</p>',
	// post 1


	// post 2
	amet_june: '<p>Июнь 29, 2022</p>',
	ipsum: '<p><b>Мои социальные сети:</b><br><br> <a href="https://t.me/eugeneviktorov" target="_blank">Telegram</a><br><br> <a href="https://github.com/eugeneviktorov" target="_blank">GitHub</a><br><br> <a href="https://dribbble.com/eugeneviktorov" target="_blank">Dribbble</a><br><br> <a href="https://www.figma.com/@eugeneviktorov" target="_blank">Figma</a><br><br> <a href="https://www.linkedin.com/in/eugeneviktorov" target="_blank">LinkedIn</a><br><br> <a href="mailto:e.viktorovvv@yandex.com" target="_blank">Эл.Почта</a></p>',
	amet_edit_two: '<p>23:21</p>',
	// post 2


	// пост 3
	amet_august: '<p>Август 24 2022 г.</p>',
	sits: '<p><b>Мои проекты:</b><br></br> Создание одностраничных сайтов в дизайнерском стиле со схемаматикой "Taplink".<br> Ручная работа написания кода, и создания уникального дизайна.<br><br> <a href="https://github.com/eugeneviktorov/Micfe" target="_blank">• Micfe (GitHub)</a><br><br> <a href="https://github.com/eugeneviktorov/Intonation" target="_blank">• Intonation (GitHub)</a><br><br> Программа для обучения основам компьютерной графики.<br><br> <a href="https://github.com/eugeneviktorov/RGBSchool" target="_blank">• RGBSchool (GitHub)</a></p>',
	amet_edit_three: '<p>05:06</p>',
	// пост 3


	// post 4
	amet_october: '<p>Октябрь 26, 2022</p>',
	hacks: '<p><b>💻Онлайн Хакатон "IT LAND Landing Design Hackathon"</b><br><br> Участвовал в хакатоне по созданию креативного дизайна и верстки сайта с использованием сервисов NoCode.</br> Тема: Справочник ИТ-специалиста.<br><br> <a href="https://www.figma.com/community/file/1166069552938719525" target="_blank">Ссылка на дизайн (Figma)</a><br ><br> <a href="http://project6230265.tilda.ws/" target="_blank">Ссылка на сайт (Tilda)</a><br><br> <a href="https://www.linkedin.com/feed/update/urn:li:activity:6998854135307526144/" target="_blank">Пост на LinkedIn</a></p>',
	amet_edit_four: '<i><p>edited </i>19:49</p>',
	// post 4


	tempor_link: 'Копировать ссылку',

	elitL: 'Светлая',
	elitD: 'Тёмная',

	orgaztn: '<p>© Network Profile<br> Евгений Викторов<br> 2022-2023<br><br> e.viktorovvv@yandex<br> <a href="index/files/Пользовательское соглашение.txt" target="_blank">Пользовательское соглашение</a></p>',
};


changeLagnuage();

function changeLagnuage() {
	let language = lang.checked ? rus : eng;
	document.querySelectorAll('[text]').forEach(el => {
		el.innerHTML = language[el.getAttribute('text')];
	})
}


// Theme System
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
	document.body.classList.add('dark-theme');
} else {
	document.body.classList.remove('dark-theme');
}


// Dark theme Button
const btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", function() {
	document.body.classList.toggle("dark-theme");
});


// Switch theme
changeTheme();

function changeTheme() {
	let language = theme.checked ? lights : darks;
	document.querySelectorAll('[text]').forEach(el => {
		el.innerHTML = themes[el.getAttribute('text')];
	})
}