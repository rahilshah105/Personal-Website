import React from "react";

interface ContentProps {
  content: React.ReactNode;
  children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ content, children }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content as string }} />
      {children}
    </div>
  );
};

export default Content;
