const hearts = document.querySelectorAll("#toggleFav");

for (let heart of hearts) {
  heart.addEventListener("click", toogleHeart.bind(heart));
}

function toogleHeart () {
  // toggle the eye icon
  const icon = this.getElementsByTagName("i")[0];
  icon.classList.toggle('bi-heart');
  icon.classList.toggle('bi-heart-fill');
}

const eyes = document.querySelectorAll("#toogleSee");

for (let eye of eyes) {
  eye.addEventListener("click", toogleSee.bind(eye));
}

function toogleSee () {
  // toggle the eye icon
  const icon = this.getElementsByTagName("i")[0];
  icon.classList.toggle('bi-eye');
  icon.classList.toggle('bi-eye-slash');
}
