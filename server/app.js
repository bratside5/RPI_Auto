const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ msg: "API Root... Welcome 😎 " });
});

app.get("/api/retropie", (req, res) => {
  const { spawn } = require("child_process");
  const ls = spawn("ls");
  ls.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
    res.json("Loaded Retropie");
  });

  ls.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  ls.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});

//Run app, then load http://localhost:5000 in a browser to see the output.
