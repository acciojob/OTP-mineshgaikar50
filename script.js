const codes = document.querySelectorAll('.code');

// Focus on the first input when the page loads
codes[0].focus();

codes.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    // Only allow numbers
    const value = e.target.value.replace(/\D/, '');
    e.target.value = value;

    // Move to the next input if current is filled
    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      // Clear the input and focus the previous input
      input.value = '';
      if (index > 0) {
        codes[index - 1].focus();
      }
    }
  });
});
