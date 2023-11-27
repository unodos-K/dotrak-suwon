const { DateTime } = require('luxon');

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const mysql = require('mysql');
require('dotenv').config();
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

// 메일을 발송할 함수
async function sendMail(name, contact, treatmentArea) {
  const seoulDateTime = DateTime.local().setZone('Asia/Seoul');
    const emailAddress = process.env.EMAIL_USER;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailAddress,
            pass: process.env.APP_PASS    
        }
    });

    let mailOptions = {
        from: emailAddress,
        to: emailAddress, // 수신자 이메일 주소
        subject: '새로운 요청이 도착했습니다.',
        text: `
            고객명: ${name}
            연락처: ${contact}
            접수일자: ${seoulDateTime.setLocale('ko-KR').toFormat('yyyy-MM-dd HH:mm:ss')}
            시술부위: ${treatmentArea}
        `
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('메일이 발송되었습니다:', info.messageId);
}




app.post('/submitForm', (req, res) => {
    try {
      const formData = req.body;
      console.log(formData)
      const sql = 'INSERT INTO smp_applications (name, contact, treatmentArea, checked) VALUES (?, ?, ?, ?)';
      const values = [formData.name, formData.contact, formData.treatmentArea];
      console.log(values)
      connection.query(sql, values, (error, results) => {
          if (error) {
              console.error('데이터베이스 삽입 오류:', error);
              res.status(500).json({ error: '서버 오류: 데이터베이스 삽입 중 오류 발생' });
            } else {
                sendMail(formData.name, formData.contact, formData.treatmentArea);
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