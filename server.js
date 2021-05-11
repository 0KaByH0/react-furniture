// // створюємо додаток
// var express = require('express');
// var app = express();

// // створюємо веб сокет
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

// //генеруємо id кімнати
// var uuidv4 = require('uuid').v4;

// //дані сервера
// let rooms = {};
// let chatLogs = {};
// let playersList = {};

// const cors = require('cors');
// app.use(cors());

// // створюжмо кімнату та заповнюємо її
// app.get('/room', function (req, res, next) {
//   const room = {
//     name: req.query.name,
//     id: uuidv4(),
//   };
//   rooms[room.id] = room;
//   chatLogs[room.id] = [];
//   playersList[room.id] = [];
//   //console.log('room', room);
//   //console.log('player list', playersList);
//   res.json(room);
// });

// // відправлюємо дані оновленні дані на клієнт про кімнату
// app.get('/room/:roomId', function (req, res, next) {
//   const roomId = req.params.roomId;
//   const response = {
//     ...rooms[roomId],
//     chats: chatLogs[roomId],
//     players: playersList[roomId],
//   };
//   //console.log('response:', response);
//   res.json(response);
// });

// // app.ws('/', function (ws, req) {
// // 	console.log("socket")
// // 	ws.on('connection', function(socket){
// // 		console.log("conect")
// // 	})
// // 	ws.on('essage', function (msg) {
// // 		console.log(msg);
// // 	});
// // });

// // app.listen(5000);

// // створюємо звязок з клієнтом
// io.on('connection', function (socket) {
//   // подія вхід нового клієнта в кімнату
//   socket.on('event://enter-room', function (msg) {
//     const payload = JSON.parse(msg);
//     if (playersList[payload.roomId]) {
//       playersList[payload.roomId].push(payload.data.username);
//     }
//   });

//   // подія відправки повідомлення клієнтом
//   socket.on('event://send-message', function (msg) {
//     console.log('got', msg);
//     const payload = JSON.parse(msg);
//     if (chatLogs[payload.roomID]) {
//       chatLogs[payload.roomId].push(payload.data);
//     }

//     // відразу отримуємо повідомлення від клієнтів
//     socket.broadcast.emit('event://get-message', msg);
//   });
// });

// // прослуховуэмо наш сервер на порту 5000
// http.listen(5000, function () {
//   console.log('listening on *:5000');
// });

//***************************************************************************************
//***************************************************************************************

//підключення бібліотек
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');

//cтворення серевера за допомогою бібліотеки express
const app = express();
const PORT = process.env.PORT || 5000;

//підключення парсерів та корс для безпечної передачі даних
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

let users = [
  { email: 'test1@asd.asd', password: '1234567', isAdmin: false },
  { email: 'testUser@mail.ru', password: '1234567', isAdmin: false },
  { email: 'admin', password: 'admin', isAdmin: true },
  { email: 'test2', password: '123', isAdmin: false },
  { email: 'user', password: 'user', isAdmin: false },
];
let products = [
  {
    id: 1,
    name: 'Обеденный стол GT К-6106 140-180х80х76 см Beige (К-6106 (140-180*80*76) Beige)',
    description: 'TableTableTableTableTableTableTable',
    price: 9399,
    imageUrl: 'https://content1.rozetka.com.ua/goods/images/big/49103635.jpg',
    amount: 3,
  },
  {
    id: 2,
    name: 'Стол раздвижной Meblion "Телескоп 815 серый + урбан лайт "',
    description: 'TableTableTableTableTableTableTable',
    price: 17858,
    imageUrl: 'https://content1.rozetka.com.ua/goods/images/big/26192474.jpg',
    amount: 2,
  },
  {
    id: 3,
    name: 'Стол обеденный деревянный Мелитополь Мебель Берлин белый / стекло',
    description: 'TableTableTableTableTableTableTable',
    price: 10063,
    imageUrl: 'https://content.rozetka.com.ua/goods/images/big/26282318.jpg',
    amount: 6,
  },
  {
    id: 4,
    name: 'Диван Kairos Айго 2 Саванна нова 07 Светло-серый (FM124459)',
    description: 'TableTableTableTableTableTableTable',
    price: 16028,
    imageUrl: 'https://content2.rozetka.com.ua/goods/images/big/174541250.jpg',
    amount: 0,
  },
  {
    id: 5,
    name: 'Диван Rondi Офис двойной модуль со спинкой и подлокотниками Бежевый',
    description: 'TableTableTableTableTableTableTable',
    price: 9399,
    imageUrl: 'https://content1.rozetka.com.ua/goods/images/big/16334078.jpg',
    amount: 6,
  },
  {
    id: 6,
    name: 'Диван Kulik System SOMBRERO Половинка Темно-синий (SOMBRERO_6133_M05_MC_0213)',
    description: 'TableTableTableTableTableTableTable',
    price: 20320,
    imageUrl: 'https://content2.rozetka.com.ua/goods/images/big/84369483.jpg',
    amount: 1,
  },
];

//функції сервера
const check_email = (email) => (users.find((user) => user.email === email) ? true : false);
const check_login = (email, pass) =>
  users.find((user) => user.email === email).password === pass ? true : false;
const deleteItem = (id) => products.filter((item) => item.id !== id);

//пост запити які надоходять від клієнта
app.post('/products', (req, res) => {
  res.send(products);
});
app.post('/delete', (req, res) => {
  products = deleteItem(req.body.id);
});
app.post('/add', (req, res) => {
  products.push(req.body.data);
});
app.post('/edit', (req, res) => {
  products = products.map((el) => (el.id === req.body.payload.id ? req.body.payload : el));
});

//пост запрос на авторизацію від клієнта
app.post('/log', (req, res) => {
  console.log(req.body);
  return check_email(req.body.email) && check_login(req.body.email, req.body.password)
    ? res.send({
        validEmail: true,
        email: users.find((user) => user.email === req.body.email).email,
        isAdmin: users.find((user) => user.email === req.body.email).isAdmin,
      })
    : res.send({ validEmail: false });
});

//пост запрос на регістрацію від клієнта
app.post('/reg', function (req, res) {
  if (!check_email(req.body.email)) {
    users.push(req.body);
    res.send({ addEmail: true });
  } else res.send({ addEmail: false });
  console.log(users);
});

//встановлення сервера на прослуховування на порту
app.listen(PORT, () => {
  console.log(`Our app is listening at http://localhost:${PORT}`);
});
