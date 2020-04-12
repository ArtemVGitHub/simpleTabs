document.addEventListener('DOMContentLoaded', function () {

	let tabsHeader = document.querySelector('.tabs-header'),
		tabsHeaderTitle = document.querySelectorAll('.tabs-header__title'),
		tabsContentBody = document.querySelectorAll('.tabs-content__body');

	// Hide all tabs content, display 1st tab content

	function hideTabContent(a) {
		for (let i = a; i < tabsContentBody.length; i++) {
			tabsContentBody[i].classList.remove('show');
			tabsContentBody[i].classList.add('hide');
		}
	}

	hideTabContent(1);


	// Show current tab content

	function showTabContent(b) {
		if (tabsContentBody[b].classList.contains('hide')) {
			tabsContentBody[b].classList.remove('hide');
			tabsContentBody[b].classList.add('show');
		}
	}

	//Set current tab title

	function setCurrentTabTitle(c) {
		for (let i = 0; i < tabsHeaderTitle.length; i++) {
			tabsHeaderTitle[i].classList.remove('current');
		}
		tabsHeaderTitle[c].classList.add('current');
	}


	// Click tab and show target tab content

	tabsHeader.addEventListener('click', function (event) {
		let tabs = event.target;

		if (tabs && tabs.matches('div.tabs-header__title')) {
			for (let i = 0; i < tabsHeaderTitle.length; i++) {
				if (tabs == tabsHeaderTitle[i]) {
					setCurrentTabTitle(i);
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
});
