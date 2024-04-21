import { Button, Form, FormProps, Input, Modal, Popover, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import { DeleteBlogPost, createNewBlogPost } from './queries';
import { UploadOutlined } from '@ant-design/icons';
import { posts } from './data';
function Post(props: {
  title: string;
  image: string;
  description: string;
  id: string;
  author: {
    name: string;
    avatar: string;
  };
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, image, description, id, author } = props;

  const handleDeletePost = () => {
    DeleteBlogPost(id);
  };
  const handleEditPost = (values: any) => {
    DeleteBlogPost(values);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish: FormProps['onFinish'] = (values) => {
    handleEditPost(values);
  };

  const content = (
    <>
      <div onClick={handleDeletePost}>
        <i
          className="fa-solid fa-trash"
          style={{ marginRight: '1rem', color: '#ee205e' }}
        ></i>
        delete
      </div>
      <div onClick={() => setIsModalOpen(true)}>
        <i
          className="fa-regular fa-pen-to-square"
          style={{ marginRight: '1rem', color: '#28e23d' }}
          onClick={handleDeletePost}
        ></i>
        Edit
      </div>
      <Modal
        title="Create new post"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ width: 600 }}
          onFinishFailed={onFinish}
        >
          <Form.Item label="Title : " name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Photos : "
            name="photo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action={''}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
  return (
    <div className="card">
      <div className="card__header">
        <img
          src={image}
          alt="card__image"
          className="card__image"
          width="600"
        />
        <Popover placement="top" content={content} trigger={'click'}>
          <Button className="blog-post_modal">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </Button>
        </Popover>
      </div>
      <div className="card__body">
        <span className="tag tag-blue">Health</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <div className="user">
          <img src={author.avatar} alt="user__image" className="user__image" />
          <div className="user__info">
            <h5>{author.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function C72() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddPost = (values: any) => {
    createNewBlogPost(values);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish: FormProps['onFinish'] = (values) => {
    handleAddPost(values);
  };

  return (
    <div className="Blog">
      <Button
        className="blog__btns blog__btns__add"
        onClick={() => setIsModalOpen(true)}
      >
        Add new post
      </Button>
      <div className="container">
        {posts?.map((post) => (
          <Post {...post} />
        ))}
      </div>
      <Modal
        title="Create new post"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ width: 600 }}
          onFinishFailed={onFinish}
        >
          <Form.Item label="Title : " name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Photos : "
            name="photo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action={''}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
      ;
    </div>
  );
}
