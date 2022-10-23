// Timothy Jones Ong
// 300983486
// October 5, 2021

// IIFE -- Imediately Invoked Function Expression
let currentPageID = "#section1";

(function() {
  function Start() {
    console.log("App Started...");
  }

  window.addEventListener("load", Start);
})();
