import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import SendUIcon from '../assets/icons/Send';
import BootAvatar from '../assets/images/chat_avatar.png';
import { startChat } from '../components/Boot';
import typingAnimation from '../assets/lottie/typing.json';
import { useDetectClickOutside } from 'react-detect-click-outside';

export default function ChatBoot() {
  const [modalStateOpen, setModalState] = useState(false);
  const [messages, setMessages] = useState<any>([
    { role: 'system', content: 'hello , how can i assist you' },
  ]);

  const [bootMessages, setBootMessages] = useState<any>('');

  const messageRef = useRef<any>(null);
  const messagesContainerRef = useRef<any>(null);

  const handelModalClick = (e: any) => {
    e.stopPropagation();
    setModalState(true);
  };
  useEffect(() => {
    console.log(bootMessages);
    bootMessages && updateLastMessageValue(bootMessages);
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight + 50;
    }
  }, [bootMessages]);
  const resetMessageValue = () => (messageRef.current.value = '');

  const addMessageValue = (props: { role: string; content: string }) => {
    const { role, content } = props;
    setMessages((messages: any) => [...messages, { role, content }]);
  };

  const updateLastMessageValue = (content: string) => {
    const MessagesCopy = [...messages];

    const MessageIndex = MessagesCopy.map((msg: any) => msg.role).lastIndexOf(
      'system'
    );
    if (MessageIndex !== -1) {
      console.log(MessageIndex);
      MessagesCopy[MessageIndex] = {
        role: 'system',
        content: content,
      };
      setMessages(MessagesCopy);
    }
  };
  const handleSendMessage = () => {
    if (messageRef.current && messageRef.current.value) {
      const newMessage = messageRef.current.value;
      resetMessageValue();
      addMessageValue({ role: 'user', content: newMessage });
      addMessageValue({ role: 'system', content: '' });
      setBootMessages('');
      startChat(newMessage!, setBootMessages, messages);
    }
  };
  const handleKeyUp = (e: any) => {
    e.key === 'Enter' && handleSendMessage();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: typingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const handleCloseChat = () => setModalState(false);
  const ref = useDetectClickOutside({ onTriggered: handleCloseChat });

  return (
    <div className="chat-boot__wrapper" ref={ref}>
      <div
        className={`chat-boot__modal${modalStateOpen ? '--content' : '--icon'}`}
        onClick={handelModalClick}
      >
        {modalStateOpen ? (
          <div className="chat-boot__modal__box">
            <div
              className="chat-boot__modal__box__content"
              ref={messagesContainerRef}
            >
              {messages?.map(
                (message: { role: string; content: string }, i: number) => {
                  const { role, content } = message;
                  return (
                    <div
                      className={`chat-boot__modal__box__content__message ${`chat-boot__modal__box__content__message--${role}`}`}
                    >
                      {role === 'system' && (
                        <div className="chat-boot__modal__box__content__message__img">
                          <img src={BootAvatar} alt="" />
                        </div>
                      )}

                      <p key={i + 'message-boot'}>
                        {role === 'system' && !content ? (
                          <Lottie
                            options={defaultOptions}
                            height={25}
                            width={50}
                            style={{ margin: 0 }}
                          />
                        ) : (
                          content
                        )}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
            <div className="chat-boot__modal__box__input">
              <input
                type="text"
                placeholder="Enter your message ..."
                ref={messageRef}
                onKeyUp={handleKeyUp}
              />
              <div className="chat-boot__modal__box__input__icon">
                <SendUIcon onClick={() => handleSendMessage()} />
              </div>
            </div>
          </div>
        ) : (
          <img src={BootAvatar} alt="" />
        )}
      </div>
    </div>
  );
}
