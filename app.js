function nameShuffler(str){
    var myStr = str.split(' ');
    myStr = [myStr[1], myStr[0]];
    myStr = myStr.join(' ')
    return myStr;
}

console.log(nameShuffler('john McClane')); // 'McClane john'