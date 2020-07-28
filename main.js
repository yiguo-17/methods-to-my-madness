/******************
 * YOUR CODE HERE *
 *****************/
const slice = function(str,num1,num2){
  if(!num1&&!num2){return str}
  let result = '';
  if(!num2){
    for(let i = num1; i<str.length; i++){
    result += str[i];
  }
}
for(let i = num1; i<num2; i++){
  result += str[i];}
  return result
}

const repeat = function(str,num){
  let result = '';
  for(let i=0; i<num; i++){
    result+=str;
  }
  return result
}

const startsWith = function(str1,str2){
  for(let i=0; i<str2.length; i++){
    if(str1[i]!==str2[i]){return false}
  }
  return true
}

const endsWith = function(str1,str2){
  const len1 = str1.length;
  const len2 = str2.length;
  for(let i=len2; i>0; i--){
    if(str1[len1-i]!==str2[len2-i]){return false}
  }
  return true
}

const includes = function(arr, ele){
  let result = false;
  for(let i =0; i<arr.length;i++){
    result = result || arr[i]===ele
  }
  return result
} 

const join = function(arr,str){
  let result = '';
  let mid = '';
  if(str!== undefined){mid += str}
  for(let i=0;i<arr.length-1;i++){
    result+=arr[i]+mid;
  }
  result += arr[arr.length-1]
  return result
}

const split = function(str1,str2){
  const results = [];
  if(!str2){results.push(str1);}
  else{let result = '';
  for(let i =0; i< str1.length;i++){
    if(str1[i] !==str2){result +=str1[i]}
    else if(str1[i] ===str2){results.push(result); result = '';}
    if(i === str1.length-1) {results.push(result)}
  }}
  return results
}

const trimStart = function(str){
  const notSpace = [];
  for(let i=0; i<str.length; i++){
    if(str[i]!==' '){notSpace.push(i)}
  }
  if(notSpace.length === 0){return ''}
  return slice(str,notSpace[0])
}

const trimEnd = function(str){
  const notSpace = [];
  for(let i=str.length-1; i>=0; i--){
    if(str[i]!==' '){notSpace.push(i)}
  }
  if(notSpace.length === 0){return ''}
  return slice(str,0,notSpace[0]+1)
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
