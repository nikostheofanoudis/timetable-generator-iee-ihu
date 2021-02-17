function myFunction(e) {
    const step = e.dataset.step;
    const steps = document.getElementsByClassName(`function${step}_steps`);

    for (let i = 0; i < steps.length; i++) {
      if (e.checked == true) {
          steps[i].style.display = "block";
      } else {
          steps[i].style.display = "none";
      }
    }
}