const express = require("express");
const app = express();
const path = require("path");
const puppeteer = require("puppeteer");
const cors = require("cors");

app.use(cors());

app.get("/api/power/shutdown", (req, res) => {
  const { spawn } = require("child_process");
  // const ls = spawn("ls", ["-l"]);
  const ls = spawn("sudo"[("shutdown", "now")]);
  ls.stdout.on("data", (data) => {
    console.log(`stdout: ${data}, Shutting Down`);
  });

  ls.stderr.on("data", (data) => {
    console.error(
      `stderr: ${data}, There Was An Error Shutting Down The System`
    );
  });

  ls.on("close", (code) => {
    console.log(`child process exited with code ${code},`);
    res.json({ msg: "Clean Shutdown" });
  });
});

app.get("/api/power/reset", (req, res) => {
  const { spawn } = require("child_process");
  // const ls = spawn("ls", ["-l"]);
  const ls = spawn("sudo", ["reboot"]);
  ls.stdout.on("data", (data) => {
    console.log(`stdout: ${data}, Rebooting`);
  });

  ls.stderr.on("data", (data) => {
    console.error(`stderr: ${data}, There Was An Error Rebooting The System`);
  });

  ls.on("close", (code) => {
    console.log(`child process exited with code ${code},`);
    res.json({ msg: "Clean Reboot" });
  });
});

app.get("/api/systemdata", (req, res) => {
  const time = new Date();
  res.json({ time: time.toString() });
  console.log(time);
});

app.listen(5001, () => {
  console.log("Example app listening on port 5001!");
});

app.get("/api/power/terminal", (req, res) => {
  const { spawn } = require("child_process");
  const ls = spawn("./shell/OpenTerminal.sh");
  ls.stdout.on("data", (data) => {
    res.json({ msg: `Terminal Running` });
  });

  ls.stderr.on("data", (data) => {
    console.error(`stderr: ${data}, There Was An Error Loading The Terminal`);
  });

  ls.on("close", (code) => {
    console.log(`child process exited with code ${code},`);
    res.json({ msg: "Clean Terminal Exit" });
  });
});
