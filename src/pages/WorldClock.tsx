import { Spin, message } from 'antd';
import Search from 'antd/es/transfer/search';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Clock } from 'src/features/Clock/Clock';

export const WorldClock = () => {
  const [times, setTimes] = useState();
  const fetchFunc = async ({ search }: any) => {
    await fetch(
      `http://api.timezonedb.com/v2.1/list-time-zone?key=FN56ZEF8VCAA&country=${search}&format=json`
    )
      .then(async (res) => {
        const response = await res.json();

        setTimes(response.zones[0]);
      })
      .catch((err) => {
        message.error('Too Many Requests');
      });
  };
  useEffect(() => {
    fetchFunc({ search: 'TN' });
  }, []);
  const debounce = (func, wait) => {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };
  const debouncedOnChange = debounce(
    (el) => fetchFunc({ search: el.target.value }),
    300
  );

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Search
        placeholder="country code example:TN"
        onChange={debouncedOnChange}
      />

      {times ? (
        <>
          <h1>{times.countryName}</h1>
          <h3>{times.zoneName}</h3>
          <div className="time"></div>
          <Clock dateNow={times.timezone} />
        </>
      ) : (
        <Spin />
      )}
    </div>
  );
};
