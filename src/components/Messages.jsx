import { useSelector } from 'react-redux';
import React, { useEffect, useContext, useRef } from 'react';
import { Button } from 'react-bootstrap';
import UserNameContext from '../userNameContext';

const renderMessages = (message) => {
  const currentUser = useContext(UserNameContext);
  const {
    text, id, userName, sendTime,
  } = message;

  const messageArea = (
    <Button className="border-0 text-left bg-light" variant="outline-dark">
      <div>
        {text}
        <font className="align-bottom mb-1 ml-1" size="2" color="gray">{sendTime}</font>
      </div>
    </Button>
  );
  const userNameArea = <b className="m-1">{userName}</b>;
  return currentUser === userName
    ? (
      <div key={id} className="text-right m-2">
        {messageArea}
        {userNameArea}
      </div>
    )
    : (
      <div key={id} className="m-2">
        {userNameArea}
        {messageArea}
      </div>
    );
};


const Messages = () => {
  const allMessages = useSelector((state) => {
    const { messages, channels: { activeId } } = state;
    return messages.filter((el) => el.channelId === activeId);
  });
  const scrollRef = useRef();

  useEffect(() => { scrollRef.current.scrollIntoView(); });

  return (
    <>
      {allMessages.map(renderMessages)}
      <div ref={scrollRef} />
    </>
  );
};

export default Messages;
