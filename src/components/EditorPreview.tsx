"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Dispatch, SetStateAction } from "react";
import Toolbar from "./Toolbar";

const EditorPreview = ({ content }: { content: string }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editorProps: {
      attributes: {
        class: "border-none outline-none p-2",
      },
    },
    autofocus: true,
    editable: false,
  });

  return (
    <div className="border border-black">
      <EditorContent
        style={{ whiteSpace: "pre-line" }}
        editor={editor}
      />
    </div>
  );
};

export default EditorPreview;
