var x = document.getElementsByClassName('btn');
for (var i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function () {
    alert('Thanks for adopting!');
  });
}
