const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

  function decode(expr) {
    var Per1= expr;
    var Per4=" ";
    var Word=" ";
    var N=0;

    let ResultArray = [];
    while(Per1.length > 0){
      let Letter = [];
      var Per2=Per1.substr(0, 10);
      var Per5=Per1.slice(10, Per1.length);
      Per1=Per5;
      if(Per2=="**********"){
        Per2=" ";
        ResultArray.push(" ");
        }
      else{
        while(Per2.length > 0){
          var Per3=Per2.substr(0, 2);
            if(Per3=="00"){
              Per4=Per2.substr(2, 8);
              Per2=Per4;
              Letter.splice(N, 1);
              }
            if(Per3=="10"){
              Per4=Per2.substr(2, 8);
              Letter.push(".");
              Per2=Per4;
              N++;
              }
            if(Per3=="11"){
              Per4=Per2.substr(2, 8);
              Letter.push("-");
              Per2=Per4;
              N++;
              }
          }
        }
        Word = Letter.join('');
        NewLetter=MORSE_TABLE[Word];
        ResultArray.push(NewLetter);
        var Result = ResultArray.join('');
      }
      return Result;
    }

module.exports = {
    decode
}
