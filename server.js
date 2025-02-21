const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generative Art</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    </head>
    <body style="text-align: center; font-family: Arial, sans-serif;">
      <h2>Interactive Generative Art</h2>
      <script>
        function setup() {
          createCanvas(600, 400);
          background(255);
        }
        function draw() {
          if (mouseIsPressed) {
            fill(random(255), random(255), random(255));
            ellipse(mouseX, mouseY, random(20, 50));
          }
        }
      </script>
    </body>
    </html>`);
});

app.listen(PORT, () => console.log("Server running at http://localhost:" + PORT));
