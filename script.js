const modal = document.querySelector("#searchModal");
const searchInput = document.querySelector("#searchInput");
const symbolsCount = document.querySelector(".symbols__count");
const symbolsLimit = symbolsCount.dataset.symbolsLimit;

const openSearchModal = () => {
	modal.style.display = "block";
};

const closeSearchModal = () => {
	modal.style.display = "none";
};

modal.addEventListener("click", (event) => {
	if (event.target === modal) {
		closeSearchModal();
	}
});

window.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeSearchModal();
	}
});

searchInput.addEventListener(
	"input",
	() => {
		if (searchInput.value.length > symbolsLimit) {
			searchInput.value = searchInput.value.slice(0, symbolsLimit);
			searchInput.style.borderColor = "red";
		} else {
			symbolsCount.textContent = `${searchInput.value.length} / ${symbolsLimit}`;
			searchInput.style.borderColor = "unset";
		}

		searchInput.style.height = "auto";
		searchInput.style.height = searchInput.scrollHeight + 8 + "px";
	},
	false
);
