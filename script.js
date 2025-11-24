// Selecting DOM elements by their data attributes
document.addEventListener('DOMContentLoaded', () => {
// 1) Counter display
const counterValueEl = document.querySelector('[data-counter-value]');

// 2) Add button
const addBtn = document.querySelector('[data-add]');

// 3) Subtract button
const subBtn = document.querySelector('[data-sub]');

// 4) Reset button
const resetBtn = document.querySelector('[data-reset]');

// Function to add 1
function handleAdd() {
  // Get current value as number
  let currentValue = Number(counterValueEl.textContent);
  currentValue += 1;
  counterValueEl.textContent = currentValue;
}

// Function to subtract 1 (but not below 0)
function handleSubtract() {
  let currentValue = Number(counterValueEl.textContent);
  if (currentValue > 0) {
    currentValue -= 1;
    counterValueEl.textContent = currentValue;
  }
  // else do nothing if it's already 0
}

// Function to reset to 0
function handleReset() {
  counterValueEl.textContent = 0;
}

// 3) Event listeners
addBtn.addEventListener('click', handleAdd);
subBtn.addEventListener('click', handleSubtract);
resetBtn.addEventListener('click', handleReset);

});