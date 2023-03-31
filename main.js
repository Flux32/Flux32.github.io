//Tabs

const tabsBtns = document.querySelectorAll(".tab__button-container");
console.log(tabsBtns);
const tabs = document.querySelectorAll(".tab__about")
console.log(tabs);

function hideTabs()
{
    tabs.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(button => button.classList.remove("tab__button-container--active"));
}

function showTabs(index)
{
    tabs[index].classList.remove("hide");
    tabsBtns[index].classList.add("tab__button-container--active");
}

hideTabs();

tabsBtns.forEach((button, index) => button.addEventListener("click", () => {
    hideTabs();
    showTabs(index);
}));

console.log(tabs.length);

