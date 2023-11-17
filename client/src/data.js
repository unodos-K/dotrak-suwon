const fs = require('fs');

function getRandomNumberInRange(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

function generateRandomHourArray(length) {
    return Array.from({ length }, () => getRandomNumberInRange(6, 23));
}

function generateRandomMinutesArray(length) {
    return Array.from({ length }, () => getRandomNumberInRange(0, 59));
}

function getRandomElementFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomFourDigitNumber() {
    return Math.floor(Math.random() * 9000) + 1000;
}
// console.log(dateArray)

function generateRandomUserData(day) {
    const randomNumber = getRandomNumberInRange(9, 13);
    const hours = generateRandomHourArray(randomNumber).sort((a, b) => b - a);
    const minutes = generateRandomMinutesArray(randomNumber);
    const seconds = generateRandomMinutesArray(randomNumber);
    
    return hours.map((hour, index) => ({
        time: `11월 ${day}일 ${hour.toString()}시 ${minutes[index]}분 ${seconds[index]}초`,
        name: `${getRandomElementFromArray(['김', '이', '박', '강', '최', '정', '장', '곽', '성', '차', '설', '나', '조', '한', '황', '안', '송', '류', '유', '홍', '고', '오', '조', '임', '신', '전', '서', '윤', '문', '양', '배'])}**님`,
        contact: `010-****-${generateRandomFourDigitNumber()}`
    }));
}

function generateUserDatas() {
    const userDatas = [];
    const dateArray = Array.from({ length: 18 }, (_, index) => 30 - index);
    // const dateArray = Array.from({ length: 18 }, (_, index) => index + 12);

    // dateArray.forEach(day => {
    //     userDatas.push(generateRandomUserData(day));
    // });
    const result = dateArray.map(day => {
        const newObj = {
            day: day, 
            userData: generateRandomUserData(day)
        }
        userDatas.push(newObj);
    })
    return userDatas;
}
const realResult = generateUserDatas()

// 생성된 userDatas를 JSON 형태로 변환
const jsonData = JSON.stringify(realResult, null, 2);

// JSON 데이터를 파일에 쓰기
fs.writeFileSync('dummyData.json', jsonData);

console.log('dummyData.json 파일이 생성되었습니다.');
