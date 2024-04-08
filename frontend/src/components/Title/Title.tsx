import React from "react";

interface TitleProps {
  title: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = (props) => {
  document.title = 'Future - ' + props.title;

  return (
    <div className="w-100">{props.children}</div>
  );
};

export default Title;
