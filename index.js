function shout(string) {
    return string.toUpperCase();
}

console.log(shout("hello"));

console.log("Morning".toUpperCase());

function whisper(string) {
    return string.toLowerCase();
};

console.log(whisper("NIK"));

console.log("VERA".toLowerCase());

function logShout(string) {
    console.log(string.toUpperCase());
}

logShout("good");

function logWhisper(string) {
    console.log(string.toLowerCase());
};

logWhisper("NIKHIL");

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    };     
}

console.log(sayHiToHeadphonedRoommate("hello"));
