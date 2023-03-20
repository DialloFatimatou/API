const express = require("express");
const port = 5000;

const app = express();
app.get("/post", (req, res) => {
   res.json("Hello word");
});

// Lancer le server
app.listen(port, () => console.log("le serveur à demarré au port" +port));