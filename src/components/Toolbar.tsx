"use client";
import { Editor } from "@tiptap/react";
import React from "react";

type Props = {
  content: string;
  editor: Editor | null;
};

const Toolbar = ({ content, editor }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div className=" flex justify-center items-center">
      <div className="flex p-2 gap-2 w-fit">
        <button
          className={`
          ${
            editor.isActive("bold") ? "bg-black text-white" : ""
          } p-2 rounded-lg border transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
        >
          <i className="fi fi-sr-bold" />
        </button>
        <button
          className={`
          ${
            editor.isActive("italic") ? "bg-black text-white" : ""
          } p-2 rounded-lg border transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
        >
          <i className="fi fi-sr-italic" />
        </button>
        <button
          className={`
          ${
            editor.isActive("strike") ? "bg-black text-white" : ""
          } p-2 rounded-lg border transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
        >
          <i className="fi fi-sr-strikethrough" />
        </button>
        <button
          className={`
          ${
            editor.isActive("heading") ? "bg-black text-white" : ""
          } p-2 rounded-lg border transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
        >
          <i className="fi fi-sr-h2" />
        </button>
        <button
          className={`
          ${
            editor.isActive("bulletList") ? "bg-black text-white" : ""
          } p-2 rounded-lg border transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
        >
          <i className="fi fi-sr-list" />
        </button>
        <button
          className={`
          ${
            editor.isActive("orderedList") ? "bg-black text-white" : ""
          } p-2 rounded-lg border transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
        >
          <span className="flex items-start">
            <span className="flex flex-col gap-[1px]">
              <i className="fi fi-sr-1 text-[8px]" />
              <i className="fi fi-sr-2 text-[8px]" />
              {/* <i className="fi fi-sr-2 text-[5px]" />
              <i className="fi fi-sr-3 text-[5px]" /> */}
            </span>
            <i className="fi fi-sr-bars-sort" />
          </span>
        </button>
        <button
          className={`
          ${
            editor.isActive("blockquote") ? "bg-black text-white" : ""
          } p-2 rounded-lg border transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
        >
          <i className="fi fi-sr-quote-right" />
        </button>
        <button
          className={`
          ${
            editor.isActive("codeBlock") ? "bg-black text-white" : ""
          } p-2 rounded-lg border transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleCodeBlock().run();
          }}
        >
          <i className="fi fi-sr-code-simple" />
        </button>
        <button
          className={`
          ${
            editor.isActive("undo") ? "bg-black text-white" : ""
          } p-2 rounded-lg border transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
        >
          <i className="fi fi-sr-undo-alt" />
        </button>
        <button
          className={`
          ${
            editor.isActive("redo") ? "bg-black text-white" : ""
          } p-2 rounded-lg border transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
        >
          <i className="fi fi-sr-redo-alt" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
