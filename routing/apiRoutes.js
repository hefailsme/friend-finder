// requiring data from the friends.js list
var friends = require("../data/friends")

// GET route that displays JSON of friends array
module.exports = function(app) {
    app.get("/api/friends", function(req,res){
        res.json(friends)
    })

// compares new friends score with friends array
app.post("/api/friends", function(req, res){
    var newFriendScore = req.body.scores
    var scoresArray = []
    var friendCount = 0
    var friendMatch = 0

//  loop through friends list
for( var i = 0; i < friends.length; i++) {
    var scoreComp = 0
    //  compare scores
    for(var f = 0; f < newFriendScore.length; f++) {
        scoreComp += (Math.abs(parseInt(friends[i].scores[f]) - parseInt(newFriendScore[f])))
    }
    // push result to scoresArray
    scoresArray.push(scoreComp)
}
// find best friend match
for(var i = 0; i < scoresArray.length; i++){
    if(scoresArray[i] <= scoresArray[friendMatch]) {
        friendMatch = 1
    }
}
// return friendMatch
var iwtb = friends[friendMatch]
res.json(iwtb)
// push new entry into "friends"
friends.push(req.body)
})
}