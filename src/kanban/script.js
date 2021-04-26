const user = document.querySelector(".user");
const userMenu = document.querySelector(".user-menu");
const userMenuAvatar = document.querySelector(".user-menu__avatar");
const userMenuDropdown = document.querySelector(".user-menu__dropdown");
const app = document.querySelector(".app");

let isUserMenuOpened = false;

userMenuTemplate = `
<div class="user-menu__list">
	<div class="list__item">My account</div>
	<div class="list__item">My tasks</div>
	<div class="list__item">Settings</div>
	<div class="list__item">Log out</div>
</div>
`;

switchUserMenu = () => {
	if (!isUserMenuOpened) {
		const newUserMenu = document.createElement("div");
		newUserMenu.innerHTML = userMenuTemplate;
		user.appendChild(newUserMenu);
		userMenuDropdown.style.transform = "scale(1,-1)";
		isUserMenuOpened = true;
	} else {
		const userMenuList = document.querySelector(".user-menu__list");
		userMenuList.remove();
		userMenuDropdown.style.transform = "scale(1,1)";
		isUserMenuOpened = false;
	}
};

userMenu.addEventListener("click", switchUserMenu, true);
