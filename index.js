function shout(string) {
    return string.toUpperCase();
}
function logShout(string) {
    console.log(shout(string));
}

function whisper(string) {
    return string.toLowerCase();
}
function logWhisper(string) {
    console.log(whisper(string));
}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
    console.log(sayHiToHeadphonedRoommate("hello"));
    console.log(sayHiToHeadphonedRoommate("Hello"));
    console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
}
