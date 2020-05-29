var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var exec = require("child_process").exec;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/payload", function (req, res) {
  res.sendStatus(200);
  console.log("get /payload");
});

app.post("/payload", function (req, res) {
  //verify that the payload is a push from the correct repo
  //verify repository.name ==  or repository.full_name
  console.log(
    req.body.pusher.name + " just pushed to " + req.body.repository.name
  );

  console.log("pulling code from GitHub...");

  // reset any changes that have been made locally
  //   exec("cd ~/home/pi/RPI_Auto && git reset --hard", execCallback);

  // and ditch any files that have been added locally too
  //   exec("cd ~/home/pi/RPI_Auto && git clean -df", execCallback);

  // now pull down the latest
  exec("cd ~/home/pi/RPI_Auto && git pull -f", execCallback);

  // and npm install with --production
  exec("cd ~/home/pi/RPI_Auto && npm install", execCallback);
});

app.listen(6000, function () {
  console.log("listening on 6000");
});

function execCallback(err, stdout, stderr) {
  if (stdout) console.log(stdout);
  if (stderr) console.log(stderr);
}
