function shout(string){
    return string.toUpperCase();
}
shout('hello');

function whisper(string){
    return string.toLowerCase();
}
whisper('HELLO');

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(name){
    if(name === name.toLowerCase()){
        return `I can't hear you!`
    }
    if(name === name.toUpperCase()){
        return `YES INDEED!`;
    }
    name = 'Let\'s have dinner together!'
    if(name === name ){
        return `I would love to!`;
    }
}
sayHiToHeadphonedRoommate();