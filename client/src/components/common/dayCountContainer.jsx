import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimeContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  text-align: center;
`;

function DayCountContainer() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    // 12월 1일
    const targetDate = new Date('2023-12-01T00:00:00Z');

    // 1초마다 남은 시간 갱신
    const intervalId = setInterval(() => {
      // 현재 시간
      const currentDate = new Date();

      // 남은 시간 계산 (밀리초 단위)
      const timeDiff = targetDate - currentDate;

      // 남은 일, 시간, 분, 초 계산
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      // 남은 시간 문자열로 표시
      const countdownString = `이벤트 종료까지 ${days}일 ${hours}시 ${minutes}분 ${seconds}초 남았습니다.`;

      setCountdown(countdownString);
    }, 1000);

    // 컴포넌트가 언마운트될 때 interval 정리
    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimeContainer>
      <p className="countdown">{countdown}</p>
      <p>신청을 서두르세요!!</p>
    </TimeContainer>
  );
}

export default DayCountContainer;
