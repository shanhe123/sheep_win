var time_array = [
    {},
    { chessIndex: 100, timeTag: 303 },
    ...
]

var new_time_array = [];
for (var _ = 0; _ < time_array.length; _++){
    new_time_array.push(MatchStepInfo.create(time_array[_]))
}

var payload = { 
    stepInfoList: new_time_array,
    mapSeed: XXXX,
    gameType: XXX
};

var message = MatchPlayInfo.create(payload);
var buffer = MatchPlayInfo.encode(message).finish();

Buffer.from(buffer).toString('base64');