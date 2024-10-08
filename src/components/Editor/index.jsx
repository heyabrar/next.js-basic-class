import React, { useState } from "react";
import dynamic from "next/dynamic";
// Dynamically import React Quill with no SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Import the Quill editor's CSS theme
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ size: [] }],
    [{ font: [] }],
    [{ align: ["right", "center", "justify"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ color: ["red", "#785412"] }],
    [{ background: ["red", "#785412"] }],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "color",
  "image",
  "background",
  "align",
  "size",
  "font",
];

const QuillEditor = () => {
  const [code, setCode] = useState("");

  const handleProcedureContentChange = (content, delta, source, editor) => {
    setCode(content);
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };

  console.log(code);

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
        className="w-[50%] mx-auto mt-5"
      />

      <div
        dangerouslySetInnerHTML={{ __html: code }}
        className="w-[60%] mx-auto mt-5"
      />
    </div>
  );
};

export default QuillEditor;
