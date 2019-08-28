const tabitem1_a = document.querySelector(".tabItem1");
const tabitem2_a = document.querySelector(".tabItem2");
const tabitem3_a = document.querySelector(".tabItem3");
const tab1_div = document.querySelector("#tab1");
const tab2_div = document.querySelector("#tab2");
const tab3_div = document.querySelector("#tab3");
tabitem1_a.addEventListener("click", () => {
  tabitem1_a.classList.add("active");
  tabitem2_a.classList.remove("active");
  tabitem3_a.classList.remove("active");
  tab1_div.classList = ["tab1"];
  tab2_div.classList = ["dnone"];
  tab3_div.classList = ["dnone"];
});
tabitem2_a.addEventListener("click", () => {
  tabitem1_a.classList.remove("active");
  tabitem2_a.classList.add("active");
  tabitem3_a.classList.remove("active");
  tab1_div.classList = ["dnone"];
  tab2_div.classList = ["tab2"];
  tab3_div.classList = ["dnone"];
});
tabitem3_a.addEventListener("click", () => {
  tabitem1_a.classList.remove("active");
  tabitem2_a.classList.remove("active");
  tabitem3_a.classList.add("active");
  tab1_div.classList = ["dnone"];
  tab2_div.classList = ["dnone"];
  tab3_div.classList = ["tab3"];
});
