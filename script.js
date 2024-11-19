document.addEventListener("DOMContentLoaded", () => {
  const codes = document.querySelectorAll(".code");

  codes.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      if (value && index < codes.length - 1) {
        codes[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        if (!input.value && index > 0) {
          codes[index - 1].focus();
        }
      }
    });
  });
});
