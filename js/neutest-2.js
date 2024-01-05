$(document).ready(function () {

    var radioButtons = document.querySelectorAll('input[name="options"]');

    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener('change', function () {

        document.querySelectorAll('.radio-button.active').forEach((el) => {
          el.classList.remove('active');
        });
  
        if (this.checked) {
          this.parentElement.classList.add('active');
          
        }
      });
    });
  });
  