"use client";
import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import Tiptap from "./TipTap";
import "./style.css";
import { log } from "console";
import EditorPreview from "./EditorPreview";

const Editor = () => {
  const [content, setContent] = useState("");
  const handleChange = (newContent: string) => {
    setContent(newContent);
  };
  //   "<p>Hello World! 🌎️lksdf</p><p>asdf;laskjdf'asdf</p><p>sdfl</p><p>sdfl;asjdf</p><p>asdfl;asdalsdkjf</p><p>fs;df</p><pre><code>lsjdflaasdfsaldfjsdfl</code></pre>"

  return (
    <div className="border flex">
      <div className="border border-black ">
        <Tiptap content={content} setContent={setContent} />
      </div>
      <EditorPreview content={content} />
    </div>
  );
};

export default Editor;
