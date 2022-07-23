let codedTextMessage = '';
let decodedTextMessage = '';
const cipher = {
  encode: function (offset, string) {
    if(typeof offset == "number" && typeof string == "string") {
      for (let i = 0; i < string.length; i++) {
        if(string.charCodeAt(i) >= 'A'.charCodeAt(0) && string.charCodeAt(i) <= 'Z'.charCodeAt(0))
        {
          codedTextMessage += String.fromCharCode((string.charCodeAt(i) - 65 + parseInt(offset))%26 + 65);
        }
        else 
        {         
          if(string.charCodeAt(i) >= 'a'.charCodeAt(0) && string.charCodeAt(i) <= 'z'.charCodeAt(0))
          {
            codedTextMessage += String.fromCharCode((string.charCodeAt(i) - 97 + parseInt(offset))%26 + 97);
          }
          else {codedTextMessage += String.fromCharCode(string.charCodeAt(i));}
        }       
    } 
    return codedTextMessage;
    }
    else {
      throw TypeError ('Argumentos invalidos')
    }

  },
  decode: function (offset, string) {
    if(typeof offset == "number" && typeof string == "string") {
    offset = 26 + ((offset * -1)%26);
    console.log(offset);
    for (let i = 0; i < string.length; i++) {    
      if(string.charCodeAt(i) >= 'A'.charCodeAt(0) && string.charCodeAt(i) <= 'Z'.charCodeAt(0))
      {
        decodedTextMessage += String.fromCharCode((string.charCodeAt(i) - 65 + parseInt(offset))%26 + 65);
      }
      else 
      {         
        if(string.charCodeAt(i) >= 'a'.charCodeAt(0) && string.charCodeAt(i) <= 'z'.charCodeAt(0))
        {
          decodedTextMessage += String.fromCharCode((string.charCodeAt(i) - 97 + parseInt(offset))%26 + 97);
        }
        else {decodedTextMessage += String.fromCharCode(string.charCodeAt(i));}
      }   
      console.log(decodedTextMessage);
    }
    return decodedTextMessage;    
  }
  else {
    throw TypeError ('Argumentos invalidos')
  }
}
};

export default cipher;
