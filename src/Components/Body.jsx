import React from "react";
import Chat from "./Chat";

export default function Body({ avatars, messages,support}) {
  const items = messages?.map((e, index) => {
    const isLeft = e.type === "receive" ? true : false;
    return (
      <Chat
        key={index}
        img={isLeft ? avatars.support : avatars.client}
        message={e.message}
        time={e.time}
        isLeft={support?!isLeft:isLeft}
      />
    );
  });
  return (
    <div className="panel-body">
      <div className="classNames">
        {items}
      </div>
    </div>
  );
}
