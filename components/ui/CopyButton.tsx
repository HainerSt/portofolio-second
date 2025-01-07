"use client";
import React, { useEffect, useState } from "react";
import MagicButton from "./MagicButton";

const CopyButton = () => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard.writeText("hainer.stefan@gmail.com");
    setCopied(true);
  };
  return <MagicButton title={copied ? "Mail copied" : "Copy mail"} handleClick={handleCopy} />;
};

export default CopyButton;
