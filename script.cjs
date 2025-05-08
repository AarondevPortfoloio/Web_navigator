// 1. Import dependencies
const Stack = require('./Stack.cjs');
const prompt = require('prompt-sync')();

// 2. Initialize stacks and current page
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'Start Page';

// 3. Helper functions
const showCurrentPage = (action) => {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log('Back page = ', backPages.peek());
  console.log('Next page = ', nextPages.peek());
};

const newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage("NEW: ");
};

const backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("BACK: ");
};

const nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("NEXT: ");
};

// 4. User prompt strings
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? ';

// 5. Initialize control variables
let finish = false;
let showBack = false;
let showNext = false;

// 6. Show the default page
showCurrentPage('DEFAULT: ');

// 7. Main loop
while (finish === false) {
  // Build instructions
  let instructions = baseInfo;
  if (!backPages.isEmpty()) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }
  if (!nextPages.isEmpty()) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }
  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);

  // Get user input
  const answer = prompt(question);
  const lowerCaseAnswer = answer.toLowerCase();

  // Process input
  if (
    lowerCaseAnswer !== 'n' &&
    lowerCaseAnswer !== 'b' &&
    lowerCaseAnswer !== 'q'
  ) {
    newPage(answer);
  }  else if (showNext && lowerCaseAnswer === 'n') {
    nextPage();
  } else if (showBack && lowerCaseAnswer === 'b') {
    backPage();
  } else if (lowerCaseAnswer === 'b') {
    console.log('Cannot go back a page. Stack is empty.');
  } else if (lowerCaseAnswer === 'n') {
    console.log('Cannot go to the next page. Stack is empty.');
  } else if (lowerCaseAnswer === 'q') {
    finish = true;
  }
}

   
