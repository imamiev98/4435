const express = require('express'); // ������ ����������
const app = express(); // ������� ���������� Express. ������� express () - ��� ������� �������� ������, �������������� ������� express.

app.use(express.static(`${__dirname}/public`)); //��� �������������� ����������� ������, ��������, �����������, ������ CSS � JavaScript � Express ������������ ������� ������������� ��������� express.static. ��� ���� ����� ������ ���������������� �������������� ������, ���������� �������� ��� ��������, � ������� ��������� ����������� �������, � ������� ������������� ��������� express.static. __dirname � ���������� ���������� ���������� ���� � �����.

app.listen(3000, () => console.log('server started')); // ���������� ��������� ������ � ������� ���������� �� ����� 3000.

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