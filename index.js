function shout(string){
    console.log(string === string.toUpperCase);
    return string.toUpperCase();
}
function whisper(string){
    console.log(string === string.toLowerCase);
    return string.toLowerCase();
}
function logShout(string){
    let spy = (shout);
    spy()
}

