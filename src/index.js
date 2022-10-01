var express = require("express");

const bodyparser = require("body-parser");
const { json } = require("express");

const app = express()
app.use(bodyparser())

app.get("/welcome", (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send("Welcome To Dominos")
})
app.get("/contact", (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(JSON.stringify(
        {
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        })

    )
})
app.get("*", (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.status(440).send(JSON.stringify({
    message: "API NOT FOUND",
    })
    
    )
})
app.listen(8081, () => console.log("The Server is up at 8081"))