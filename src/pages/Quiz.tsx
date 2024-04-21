import { Button, Progress, Radio, RadioChangeEvent, Space } from 'antd';
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';

import { questions } from 'src/constants/quiz';

export const Quiz = () => {
  const [indexes, setIndexes] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.id === 'true', e.target.tabIndex);
    const currentIndex = e?.target?.tabIndex;
    const currentItem = indexes.findIndex(
      (item) => item.index === currentIndex
    );

    if (currentItem === -1) {
      setIndexes([
        ...indexes,
        { index: currentIndex, response: e.target.id === 'true' },
      ]);
    } else {
      const currentObj = indexes[currentItem];
      currentObj.response = e.target.id === 'true';
      const updatedIndexes = indexes.map((item, index) =>
        index === currentIndex ? currentObj : item
      );
      setIndexes(updatedIndexes);
    }
  };
  function calculatePercentage(part, whole) {
    return (part / whole) * 100;
  }

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Progress
        percent={calculatePercentage(indexes.length, questions.length)}
      />
      <div style={{ overflow: 'auto', height: '100%' }}>
        {questions.map(({ question, options }, index) => (
          <>
            <h1>
              {index + 1}:{question}
            </h1>
            <Radio.Group onChange={onChange}>
              <Space direction="vertical">
                {options.map(({ option, correct }) => (
                  <Radio
                    disabled={submitted && !correct}
                    tabIndex={index}
                    value={option}
                    id={`${correct}`}
                  >
                    {option}
                    {submitted && correct ? <TiTick width={100} /> : null}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </>
        ))}
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',

          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Button
          style={{ width: '100%' }}
          onClick={(e) => {
            setSubmitted(true);
          }}
        >
          submit
        </Button>

        {submitted && (
          <h1
            style={{
              fontSize: '2rem',
              color:
                calculatePercentage(
                  indexes.filter((el) => el.response).length,
                  questions.length
                ) >= 50
                  ? 'green'
                  : 'red',
            }}
          >
            {calculatePercentage(
              indexes.filter((el) => el.response).length,
              questions.length
            )}
            %
          </h1>
        )}
      </div>
    </div>
  );
};
