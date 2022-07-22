let codedTextMessage = '';
let decodedTextMessage = '';
const cipher = {
  encode: function (offset, string) {
    for (let i = 0; i < string.length; i++) {
      if(string.charCodeAt(i) > 64 && string.charCodeAt(i) < (65 + 27))
      {
        codedTextMessage += String.fromCharCode((string.charCodeAt(i) - 65 + parseInt(offset))%26 + 65);
      }
      else 
      {
        
        if(string.charCodeAt(i) > 96 && string.charCodeAt(i) < (97 + 27))
        {
          codedTextMessage += String.fromCharCode((string.charCodeAt(i) - 97 + parseInt(offset))%26 + 97);
        }
        else {codedTextMessage += String.fromCharCode(string.charCodeAt(i));}
      }  
    }
    return codedTextMessage;  
  },
  decode: function (offset, string) {
    offset = 26 + offset;
    for (let i = 0; i < string.length; i++) {
      if(string.charCodeAt(i) > 64 && string.charCodeAt(i) < (65 + 27))
      {
        decodedTextMessage += String.fromCharCode((string.charCodeAt(i) - 65 + parseInt(offset))%26 + 65);
      }
      else 
      {
        if(string.charCodeAt(i) > 96 && string.charCodeAt(i) < (97 + 27))
        {
          decodedTextMessage += String.fromCharCode((string.charCodeAt(i) - 97 + parseInt(offset))%26 + 97);
        }
        else {decodedTextMessage += String.fromCharCode(string.charCodeAt(i));}
      }  
    }
    return decodedTextMessage;
  } 
};

export default cipher;
