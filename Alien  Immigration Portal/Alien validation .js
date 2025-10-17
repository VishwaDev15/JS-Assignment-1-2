function validateForm() {
  let planet = document.getElementById("planet").value;
  let antenna = document.getElementById("antenna").value;
  let alienId = document.getElementById("alienId").value;
  let phrase = document.getElementById("phrase").value;
  let date = document.getElementById("date").value;
  let result = document.getElementById("result");

  let planetPattern = /^(?=.*[aeiouAEIOU])(?=.*\d)[a-zA-Z0-9]+$/;
  if (!planetPattern.test(planet)) {
    result.textContent = "❌ Planet Name must contain at least one vowel and one digit.";
    result.style.color = "tomato";
    return;
  }

  if (antenna === "" || antenna % 2 !== 0) {
    result.textContent = "❌ Antenna Count must be an even number.";
    result.style.color = "tomato";
    return;
  }

  let idPattern = /^[A-Z]{3}-[A-Z]{2}_[0-9]{4}@UFO$/;
  if (!idPattern.test(alienId)) {
    result.textContent = "❌ Alien ID must match pattern ZOR-XY_9999@UFO.";
    result.style.color = "tomato";
    return;
  }

  let phrasePattern = /[\p{Emoji_Presentation}\p{P}]/u;
  if (!phrasePattern.test(phrase)) {
    result.textContent = "❌ Phrase must include an emoji or punctuation mark.";
    result.style.color = "tomato";
    return;
  }

  let today = new Date();
  let landing = new Date(date);
  today.setHours(0, 0, 0, 0);
  if (landing < today) {
    result.textContent = "❌ Landing Date cannot be in the past.";
    result.style.color = "tomato";
    return;
  }

  result.textContent = "✅ Welcome to Earth, Alien! 🛸";
  result.style.color = "#3fb950";
}
