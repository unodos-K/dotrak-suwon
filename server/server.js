const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const port = 3002;
const corsOptions = {
    origin: 'https://dotrak.hair',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOptions));
  
app.use(bodyParser.json());

// // MySQL 연결 설정
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// MySQL 연결
connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류: ', err);
  } else {
    console.log('MySQL에 성공적으로 연결되었습니다.');
  }
});

app.get('/test', (req, res) => {
    // console.log(res)
    res.send('This is a test endpoint.');
})

app.post('/submitForm', (req, res) => {
    try {
      const formData = req.body;
        console.log(formData)
      const sql = 'INSERT INTO user_table (name, contact) VALUES (?, ?)';
      const values = [formData.name, formData.contact];
      console.log(values)
      connection.query(sql, values, (error, results) => {
          if (error) {
              console.error('데이터베이스 삽입 오류:', error);
              res.status(500).json({ error: '서버 오류: 데이터베이스 삽입 중 오류 발생' });
            } else {
                console.log('데이터베이스에 성공적으로 삽입되었습니다.');
                res.status(200).json({ message: '서버에서 응답: 이벤트 응모가 완료되었습니다.' });
            }
      });
    } catch (error) {
      console.error('데이터 처리 중 오류 발생:', error);
      res.status(500).json({ error: '서버 오류: 데이터 처리 중 오류 발생' });
    }
  });
  
// 서버 시작
app.listen(port, () => {
  console.log(`서버가 ${port}포트에서 실행 중입니다.`);
});
