import * as React from "react";
import { useState } from "react";

type Props = {
  children: string;
};

export default ({ children }: Props) => {
  const [maskedOutput, setMasketOutput] = useState("");
  React.useEffect(() => {
    setMasketOutput(children);
    children = Array.from(children)
      .map(() => String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33))
      .join("");
  }, [children]);

  if (typeof children === "string") {
    return <div dangerouslySetInnerHTML={{ __html: maskedOutput }} />;
  }

  return <>{maskedOutput}</>;
}