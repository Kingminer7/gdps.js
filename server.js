const config = {
    server: require("./configuration/server.js")
}

const app = require("express")()
const bodyparser = require("body-parser")

app.use(bodyparser.json())

app.post("/*", (req, res) => {
    res.sendStatus(200).send("-1")
    console.log(JSON.stringify(req.body, null, 2))
})

app.get("/*", (req, res) => {
    res.send("-1")
    console.log(JSON.stringify(req.body, null, 2))
})

app.listen(3000, () => {
    console.log("Live on port 3000")
})