// Selecting DOM elements by their data attributes
// 1) Counter display
const counterValueEl = document.querySelector('[data-counter-value]');

// 2) Add button
const addBtn = document.querySelector('[data-add]');

// 3) Subtract button
const subBtn = document.querySelector('[data-sub]');

// 4) Reset button
const resetBtn = document.querySelector('[data-reset]');







// 3) Event listeners
addBtn.addEventListener('click', handleAdd);
subBtn.addEventListener('click', handleSubtract);
resetBtn.addEventListener('click', handleReset);