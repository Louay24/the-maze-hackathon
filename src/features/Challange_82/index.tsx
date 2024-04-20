import type { FormProps } from 'antd';
import { Button, Form, InputNumber } from 'antd';
import { useState } from 'react';

type FieldType = {
  height?: number;
  weight?: number;
};

const C82 = () => {
  const [myValues, setMyValues] = useState<any>();

  const onReset = () => {
    setMyValues(null);
  };
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    setMyValues(values);
  };
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };
  const MyBMI = myValues && myValues?.weight / (myValues.height / 100) ** 2;
  return (
    <div className="form-wrapper">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Height (cm): "
          name="height"
          rules={[{ required: true, message: 'Please provide your height!' }]}
        >
          <InputNumber placeholder="Height" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Weight (kg)"
          name="weight"
          rules={[{ required: true, message: 'Please provide your weight!' }]}
        >
          <InputNumber placeholder="Weight" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Calculate
          </Button>{' '}
          <Button type="primary" htmlType="reset" onClick={onReset}>
            reset
          </Button>
        </Form.Item>
      </Form>

      {myValues && (
        <>
          <p className="pain_option__title">Test resalt : </p>
          <div className="pain_options">
            <div className="pain_option">
              <img
                src="https://cdn-icons-png.freepik.com/512/10476/10476437.png?ga=GA1.1.1361632118.1683279459"
                alt=""
                style={{ width: '15rem' }}
              />
              <p>
                <p className="title">your BMI : </p>
                <p>{MyBMI.toFixed(2)}</p>
              </p>

              {MyBMI < 18.5 ? (
                <p style={{ color: 'orange', fontWeight: 800 }}>Under Weight</p>
              ) : MyBMI < 25 ? (
                <p style={{ color: 'green', fontWeight: 800 }}>Normal Weight</p>
              ) : MyBMI < 30 ? (
                <p style={{ color: 'orange', fontWeight: 800 }}>OverWeight</p>
              ) : (
                <p style={{ color: 'red', fontWeight: 800 }}>Obese</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default C82;
