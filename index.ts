
import express from "express"
import path from "path"
import cors from "cors"

const app = express()
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3333, () => {
    console.log("Server running on port 3333");
});
