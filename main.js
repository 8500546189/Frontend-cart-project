document.addEventListener("DOMContentLoaded", function () {
    const pairBoxes = document.querySelectorAll(".pair_box");

    pairBoxes.forEach(function (pairBox) {
      pairBox.addEventListener("mouseover", function () {
        pairBox.classList.add("active");
      });

      pairBox.addEventListener("mouseout", function () {
        pairBox.classList.remove("active");
      });

      pairBox.addEventListener("click", function () {
        pairBoxes.forEach(function (otherPairBox) {
          if (otherPairBox !== pairBox) {
            otherPairBox.classList.remove("active");
          }
        });
        pairBox.classList.toggle("active");
      });
    });
  });