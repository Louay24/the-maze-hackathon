import type { FormProps } from 'antd';
import { Button, Form, Select } from 'antd';
import { useState } from 'react';

type FieldType = {
  painlevel?: string;
  fatig?: string;
  mode?: string;
  painposition?: string;
};

const C18 = () => {
  const oldValues = localStorage.getItem('myValues');
  const [myValues, setMyValues] = useState<any>(JSON.parse(oldValues!));
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    setMyValues(values);
    localStorage.setItem('myValues', JSON.stringify(values));
  };
  const onReset = () => {
    setMyValues(null);
    localStorage.removeItem('myValues');
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

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
        <Form.Item
          label="pain level"
          name="painlevel"
          rules={[{ required: true, message: 'Please input your pain level!' }]}
        >
          <Select>
            <Select.Option value="No pain">No pain</Select.Option>
            <Select.Option value="Moderate ">Moderate </Select.Option>

            <Select.Option value="Severe pain">Severe pain</Select.Option>
            <Select.Option value="Worst pain imaginable ">
              Worst pain imaginable{' '}
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item<FieldType>
          label="tired level"
          name="fatig"
          rules={[
            { required: true, message: 'Please input your tired level!' },
          ]}
        >
          <Select>
            <Select.Option value="normal">normal</Select.Option>
            <Select.Option value="meduim">meduim</Select.Option>

            <Select.Option value="so tired">so tired</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item<FieldType>
          label="mode"
          name="mode"
          rules={[{ required: true, message: 'Please input your mode!' }]}
        >
          <Select>
            <Select.Option value="Fatigue">Fatigue </Select.Option>
            <Select.Option value="Anxiety and Worry">
              Anxiety and Worry
            </Select.Option>

            <Select.Option value="Depression and Hopelessness">
              Depression and Hopelessness
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item<FieldType>
          label="pain possition"
          name="painposition"
          rules={[
            { required: true, message: 'Please input your pain position!' },
          ]}
        >
          <Select>
            <Select.Option value="Head">Head</Select.Option>
            <Select.Option value="Back">Back</Select.Option>

            <Select.Option value="Neck ">Neck </Select.Option>
            <Select.Option value="Muscles ">Muscles </Select.Option>
            <Select.Option value="stomach ">stomach </Select.Option>
            <Select.Option value="chest ">chest </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>{' '}
          <Button type="primary" htmlType="reset" onClick={onReset}>
            reset
          </Button>
        </Form.Item>
      </Form>

      {myValues && (
        <><p className="pain_option__title">your answer summary is : </p><div className="pain_options">
          <div className="pain_option">
            <img
              src="https://cdn-icons-png.flaticon.com/512/670/670879.png"
              alt="" />
            <p>
              <p className="title">pain level : </p>
              <p>{myValues?.painlevel}</p>
            </p>
          </div>
          <div className="pain_option">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3874/3874664.png"
              alt="" />
            <p>
              <p className="title">tired level : </p>
              <p>{myValues?.fatig}</p>
            </p>
          </div>
          <div className="pain_option">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6134/6134059.png"
              alt="" />
            <p>
              <p className="title">mode : </p>
              <p>{myValues?.mode}</p>
            </p>
          </div>
          <div className="pain_option">
            <img
              src="https://cdn-icons-png.flaticon.com/512/387/387630.png"
              alt="" />
            <p>
              <p className="title">pain position : </p>
              <p>{myValues?.painposition}</p>
            </p>
          </div>
        </div></>
      )}
    </div>
  );
};

export default C18;
