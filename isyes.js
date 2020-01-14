// export isYes function
export default function isYes(str) {
    if (str.toLowerCase() === 'yes' || str.toLowerCase() === 'y') return true; else return false;
};


// instructions The quiz will be asking yes/no questions, but receiving a text response from the user. They could response "Yes", "y", "yes", "Y", etc.
// TDD an `isYes` function that that returns `true` for the responses you want to be "yes" (otherwise it should return `false`). Write a test for each "yes" text that your app will accept. Then write a couple tests for common "no" responses. 
