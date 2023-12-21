const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/health-checkup',function(req,res){

    const kidneys=req.body.kidneys;
    // const kidneysLength;
}
)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
