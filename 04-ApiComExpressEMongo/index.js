// console.log("Building app...");

const app = require("./src/server");
const port = 3001

app.listen(port, () => {
    console.log(`Server on: ${port}!`)
})