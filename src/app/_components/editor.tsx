"use client";
import { useCallback, useEffect, useRef } from "react";

import Checklist from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";

const EditorComponent = ({ editorData }: { editorData?: OutputData }) => {
	const ejInstance = useRef<EditorJS | null>(null);

	const initEditor = useCallback(() => {
		const editor = new EditorJS({
			holder: "editorjs",
			onReady: () => {
				ejInstance.current = editor;
			},
			autofocus: true,
			data: editorData,
			onChange: async () => {
				const content = await editor.saver.save();

				console.log(content);
			},
			tools: {
				header: Header,
				checklist: Checklist,
				code: Code,
				delimiter: Delimiter,
				embed: Embed,
				image: Image,
				inlineCode: InlineCode,
				link: Link,
				list: List,
				marker: Marker,
				paragraph: Paragraph,
				quote: Quote,
				raw: Raw,
				simpleImage: SimpleImage,
				table: Table,
				warning: Warning,
			},
		});
	}, [editorData]);

	// This will run only once
	useEffect(() => {
		if (ejInstance.current === null) {
			initEditor();
		}

		return () => {
			ejInstance?.current?.destroy();
			ejInstance.current = null;
		};
	}, [initEditor]);

	return (
		<>
			<div id="editorjs" />
		</>
	);
};

export default EditorComponent;
