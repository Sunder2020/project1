document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.addEventListener("click", function () {
      document
        .querySelectorAll(".selection")
        .forEach((sel) => sel.classList.add("hidden"));

      options.forEach((opt) => opt.classList.remove("popular"));

      this.querySelector(".selection")?.classList.remove("hidden");

      this.classList.add("popular");
    });
  });
});
