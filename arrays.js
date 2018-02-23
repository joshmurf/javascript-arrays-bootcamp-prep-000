var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element){
  chocolateBars.unshift('Reese\'s');
  return chocolateBars;


};
function destructivelyAddElementToBeginningOfArray(array, element){
  chocolateBars.slice('M&M\'s');
  return chocolateBars;
};
