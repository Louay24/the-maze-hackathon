import { useEffect } from 'react';
import './_clock.scss';
import dayjs from 'dayjs';
export const Clock = ({ dateNow }: any) => {
  useEffect(() => {
    const numberHours = document.querySelector('.number-hours');
    const barSeconds = document.querySelector('.bar-seconds');

    const handHours = document.querySelector('.hand.hours');
    const handMinutes = document.querySelector('.hand.minutes');
    const handSeconds = document.querySelector('.hand.seconds');
    const time = document.querySelector('.time');
    const numberElement = [];
    const barElement = [];

    for (let i = 1; i <= 12; i++) {
      numberElement.push(`<span style="--index:${i};"><p>${i}</p></span>`);
    }
    numberHours.insertAdjacentHTML('afterbegin', numberElement.join(''));

    for (let i = 1; i <= 60; i++) {
      barElement.push(`<span style="--index:${i};"><p></p></span>`);
    }
    barSeconds.insertAdjacentHTML('afterbegin', barElement.join(''));

    function getCurrentTime() {
      const date = dayjs(dateNow);

      const currentHours = dayjs(date).get('hours');
      const currentMinutes = dayjs(date).get('minutes');
      const currentSeconds = dayjs(date).get('seconds');

      handHours.style.transform = `rotate(${
        currentHours * 30 + currentMinutes / 2
      }deg)`;
      handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
      handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
      time.textContent = dayjs(date).format('HH:mm:ss');
    }

    getCurrentTime();
    setInterval(getCurrentTime, 1000);
  }, []);
  return (
    <div className="wrapper">
      <div className="bar-seconds"></div>
      <div className="number-hours"></div>
      <div className="hands-box">
        <div className="hand hours">
          <i></i>
        </div>
        <div className="hand minutes">
          <i></i>
        </div>
        <div className="hand seconds">
          <i></i>
        </div>
      </div>
    </div>
  );
};
