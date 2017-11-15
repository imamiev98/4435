const express = require('express'); // Импорт фреймоврка
const app = express(); // Создает приложение Express. Функция express () - это функция верхнего уровня, экспортируемая модулем express.

app.use(express.static(`${__dirname}/public`)); //Для предоставления статических файлов, например, изображений, файлов CSS и JavaScript в Express используется функция промежуточной обработки express.static. Для того чтобы начать непосредственное предоставление файлов, необходимо передать имя каталога, в котором находятся статические ресурсы, в функцию промежуточной обработки express.static. __dirname – переменная содержащая абсолютный путь к папке.

app.listen(3000, () => console.log('server started')); // Приложение запускает сервер и слушает соединения на порте 3000.

app.get('/addition', (req, res) => { 
  const query = req.query; 
  const { a = 0, b = 0 } = query; 
  res.json({ result: parseInt(a) + parseInt(b) }); 
});
app.get('/multiplication', (req, res) => { 
  const query = req.query; 
  const { a = 0, b = 0 } = query; 
  res.json({ result: parseInt(a) * parseInt(b) }); 
});
app.get('/division', (req, res) => { 
  const query = req.query; 
  const { a = 0, b = 0 } = query; 
  res.json({ result: parseInt(a) / parseInt(b) }); 
});
app.get('/minus', (req, res) => { 
  const query = req.query; 
  const { a = 0, b = 0 } = query; 
  res.json({ result: parseInt(a) - parseInt(b) }); 
});