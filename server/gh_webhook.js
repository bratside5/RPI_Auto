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
  //   console.log(
  //     req.body.pusher.name + " just pushed to " + req.body.repository.name
  //   );

  console.log("pulling code from GitHub...");
  exec("cd /home/pi/RPI_Auto", execCallback);
  exec("git reset --hard", execCallback);
  exec("git pull -f", execCallback);
  exec("cd frontend", execCallback);
  exec("npm i", execCallback);
  exec("npm run build", execCallback);
});

app.listen(6000, function () {
  console.log("listening on 6000");
});

function execCallback(err, stdout, stderr) {
  if (stdout) console.log(stdout);
  if (stderr) console.log(stderr);
}
