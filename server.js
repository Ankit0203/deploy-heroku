let express = require('express');
let app = express();

var http = require('http').createServer(app)
var io = require('socket.io')(http 
//   , {
//     cors: {
//       origin: "http://192.168.25.72:3000",
//       methods: ["GET", "POST"]
//     }
//   }
// , {
//     cors: {
//       origin: "https://chat-app-angular-node.herokuapp.com/",
//       methods: ["GET", "POST"]
//     }
//   }
  )
var cors = require('cors');



app.use(cors())
app.use(express.static('my-trial-app'));

app.get('/', (req,res)=> res.send('hello!'))

io.on('connection', (socket) =>{
    console.log('a user connected')
    socket.on('message', (msg) =>{
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg)
    })
})

http.listen(3000, "0.0.0.0");
console.log('Server running at http://0.0.0.0:3000/');


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`App is running on port ${ PORT }`);
// });
