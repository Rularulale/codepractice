document.addEventListener('DOMContentLoaded', function () {
    var exchangeWiseRadioButton = document.getElementById('consolidated');
    if (exchangeWiseRadioButton) {
      exchangeWiseRadioButton.checked = true;
      exchangeWiseRadioButton.parentElement.classList.add('active');
      console.log('Consolidated radio button is checked and marked as active.');
    }
  
    var radioButtons = document.querySelectorAll('input[name="options"]');
    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener('change', function () {
        document.querySelectorAll('.radio-button.active').forEach((el) => {
          el.classList.remove('active');
        });
  
        if (this.checked) {
          this.parentElement.classList.add('active');
          console.log('Active class added to the selected radio button.');
        }
      });
    });
  });
  