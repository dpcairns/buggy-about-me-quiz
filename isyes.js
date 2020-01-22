// define and export isYes function

export default function isYes(str) {
    if (str.toLowerCase() === 'yes' || str.toLowerCase() === 'y') return true; else return false;
}