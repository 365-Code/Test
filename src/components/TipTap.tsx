"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Dispatch, SetStateAction } from "react";
import Toolbar from "./Toolbar";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";

import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

// lowlight.createLowlight('css', css)
// lowlight.createLowlight('js', js)
// lowlight.createLowlight('ts', ts)

const Tiptap = ({
  content,
  setContent,
}: {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}) => {
  const lowlight = createLowlight(common);
  lowlight.register({ html });
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    editorProps: {
      attributes: {
        class: "border-none outline-none p-2",
      },
    },
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    autofocus: true,
  });

  return (
    <div>
      <Toolbar editor={editor} content={content} />
      <EditorContent
        placeholder="Write your amazing ideas here!"
        style={{ whiteSpace: "pre-line" }}
        editor={editor}
      />
    </div>
  );
};

export default Tiptap;
