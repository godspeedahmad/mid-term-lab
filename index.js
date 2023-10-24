const percentage = document.getElementById('percentage');
const small_cups = document.querySelectorAll('.cup-small');
const remained = document.getElementById('remained')
const total_cups = small_cups.length;
const liters = document.getElementById('liters')

//percentage.style.opacity = 1;
//percentage.style.height = `${(fullCups / total_cups) * 330}px`;
//percentage.innerText = `${(fullCups / total_cups) * 100}%`;

// call the callback function upon clicking for every small cup
// to highlight when clicked using class full and fill the glass 
small_cups.forEach((sCup, i) => {
  sCup.addEventListener('click', () => callback(i));
})
// sCup is iterator and i is index in small_cups

function callback(i) {
  if (i==7 && small_cups[i].classList.contains("full")) 
    i--;
  else if(small_cups[i].classList.contains('full') && 
  !small_cups[i].nextElementSibling.classList.contains('full'))
    i--;
  small_cups.forEach((sCup, j) => {
      if(j <= i)
          sCup.classList.add('full');
      else
          sCup.classList.remove('full');
  })
  fillGlass();
}

function fillGlass() {
  const full_cups = document.querySelectorAll('.cup-small.full').length;
  if(full_cups == 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } 
  else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(full_cups/total_cups)*330}px`;
    percentage.innerText = `${(full_cups/total_cups)*100}%`;
  }
  if(full_cups == total_cups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } 
  else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - ((25 *full_cups)/1000)}L`;
  } 
}
