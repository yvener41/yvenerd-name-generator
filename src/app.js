/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "my", "your", "its"];
  let adjective = ["great", "big", "perfect", "last", "morning"];
  let noun = ["jogger", "raccoon", "goat", "electronic", "console"];

  let myurl = [".com", ".net", ".online", ".org"];

  //create a url extension array with 4 elements
  console.log("Regular for loop");
  for (let pronounIndex = 0; pronounIndex < pronoun.length; ++pronounIndex) {
    for (let adjIndex = 0; adjIndex < adjective.length; ++adjIndex) {
      for (let nounIndex = 0; nounIndex < noun.length; ++nounIndex) {
        for (let myurlIndex = 0; myurlIndex < myurl.length; ++myurlIndex) {
          console.log(
            `${pronoun[pronounIndex]}${adjective[adjIndex]}${noun[nounIndex]}${myurl[myurlIndex]} `
          );
        }
      }
    }
  }
};
