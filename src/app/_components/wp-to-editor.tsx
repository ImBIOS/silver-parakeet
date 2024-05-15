"use client";
import { OutputData } from "@editorjs/editorjs";
import { useState } from "react";
import EditorComponent from "./editor";
import WpInput from "./wp-input";

const WpToEditor = () => {
	const [editorData, setEditorData] = useState<OutputData>();
	return (
		<>
			<WpInput setEditorData={setEditorData} />
			<EditorComponent editorData={editorData} />
		</>
	);
};

export default WpToEditor;
