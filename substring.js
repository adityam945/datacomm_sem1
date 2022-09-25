function checkChar(str, char) {
  let tempOccurance = 0;
  let tempIndex = -1;
  for (var i = 0; i < str.length; i++) {
    let charAtStr = str.charAt(i);
    if (charAtStr === char) {
      tempOccurance++;
      tempIndex = i;
      break;
    }
  }
  if (tempIndex != -1) {
    return tempIndex;
  } else {
    return -1;
  }
}

var isSubsequence = function (s, t) {
  let tempStrIndex = t;
  for (var i = 0; i < s.length; i++) {
    let charAtS = s.charAt(i);
    let foundIndex = checkChar(t, charAtS);
    if (foundIndex != -1) {
      tempStrIndex = foundIndex + 1;
      t = t.slice(tempStrIndex);
    } else {
      return false;
    }
  }
  return true;
};

module.exports = { isSubsequence };
