import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend mukodik!");
});

app.listen(5000, () => console.log("Backend fut a http://localhost:5000 cimen"));
