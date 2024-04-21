import React, { useState, useEffect } from 'react';
import { Input, Button, List, message, Form, TimePicker,Typography } from 'antd';
import { format , differenceInMinutes } from 'date-fns';

const { Item, useForm } = Form;
const { Text } = Typography;


function MedicationReminderUI() {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [schedule, setSchedule] = useState<any>('');
  const [medications, setMedications] = useState<any>(JSON.parse(localStorage.getItem('medications') || '') || []);
  const [nearestMedication, setNearestMedication] = useState<any>(null);

  const [form] = useForm();

  useEffect(() => {
    const storedMedications = JSON.parse(localStorage.getItem('medications') || '') || [];
    setMedications(storedMedications);
  }, []);

  useEffect(() => {
    localStorage.setItem('medications', JSON.stringify(medications));
  }, [medications]);

  const addMedication = async () => {
    try {
      await form.validateFields();
      const newMedication = {
        id: Date.now(),
        name,
        dosage,
        schedule: format(new Date(schedule), 'HH:mm')
      };
  
      setMedications([...medications, newMedication]);
  
      localStorage.setItem('medications', JSON.stringify([...medications, newMedication]));
      checkReminders();
      setName('');
      setDosage('');
      setSchedule('');
      form.resetFields();
    } catch (error) {
      console.error('Validation failed', error);
    }
  };
  

  const checkReminders = () => {
    const currentTime = format(new Date(), 'HH:mm');
    console.log(currentTime)
    const sortedMedications = [...medications].sort((a, b) => {
      const diffA = Math.abs(differenceInMinutes(new Date(`2000-01-01T${a.schedule}:00`), new Date(`2000-01-01T${currentTime}:00`)));
      const diffB = Math.abs(differenceInMinutes(new Date(`2000-01-01T${b.schedule}:00`), new Date(`2000-01-01T${currentTime}:00`)));
      return diffA - diffB;
    });
  
    if (sortedMedications.length > 0) {
      const nearestMedication = sortedMedications[0];
      const timeDiff = Math.abs(differenceInMinutes(new Date(`2000-01-01T${nearestMedication.schedule}:00`), new Date(`2000-01-01T${currentTime}:00`)));
  
      if (timeDiff >= 0) {
        const hours = Math.floor(timeDiff / 60);
        const minutes = timeDiff % 60;
        const seconds = Math.floor((timeDiff * 60) % 60);
        setNearestMedication({
          name: nearestMedication.name,
          dosage: nearestMedication.dosage,
          timeDiff: `${hours} hours , ${minutes} minutes and ${seconds} seconds`
        });
      } else {
        setNearestMedication(null);
      }
  
      if (nearestMedication.schedule === currentTime) {
        message.info(`It's time to take ${nearestMedication.dosage} of ${nearestMedication.name}`);
      }
    }
  };
  
  


  useEffect(() => {
    const interval = setInterval(() => {
      checkReminders();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App"  style={{margin:'0 auto'}}>
      <h1>Medication Reminder App</h1>
      {nearestMedication && (
        <div style={{ marginBottom: '20px' }}>
          <Text strong>Next Medication:</Text> {nearestMedication.name} - {nearestMedication.dosage}
          <br />
          <Text strong>Time Remaining:</Text> {nearestMedication.timeDiff} minutes
        </div>
      )}
      <Form form={form} layout="inline" onFinish={addMedication} style={{
        display:'flex',
        flexDirection : 'column',
        gap:'20px',
        width:'100%',
        justifyContent:'center'
      }}>
        <Item
          name="name"
          rules={[{ required: true, message: 'Medication name is required' }]}
          style={{width:'100%'}}
        >
          <Input placeholder="Medication Name" value={name} onChange={(e) => setName(e.target.value)} />
        </Item>
        <Item
          name="dosage"
          rules={[{ required: true, message: 'Dosage is required' }]}
          style={{width:'100%'}}
        >
          <Input placeholder="Dosage" value={dosage} onChange={(e) => setDosage(e.target.value)} />
        </Item>
        <Item
          name="schedule"
          rules={[
            { required: true, message: 'Schedule is required' },
          ]}
          style={{width:'100%'}}
        >
          <TimePicker
          style={{width:'100%'}}
            format="HH:mm"
            placeholder="Schedule"
            value={schedule}
            onChange={(time) => setSchedule(time)}
          />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit" style={{width:'100%'}}>
            Add Medication
          </Button>
        </Item>
      </Form>
      <div 
      style={{
        display:'flex',
        flexDirection : 'column',
        gap:'20px',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        margin:'15px auto'
      }}>
        <h2>Medications</h2>
        <List
          dataSource={medications}
          renderItem={(medication:any) => (
            <List.Item key={medication.id}>
              {medication.name} - {medication.dosage} - {medication.schedule}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default MedicationReminderUI;
