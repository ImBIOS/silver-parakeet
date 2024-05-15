import { convertWPToEditorJS } from "@/utils/wp2editor";
import { OutputData } from "@editorjs/editorjs";
import { useEffect } from "react";
import { dummyData } from "./data";

type Props = {
	setEditorData: (data: OutputData) => void;
};

/**
 *
 * @param param0
const DEFAULT_INITIAL_DATA = {
	time: new Date().getTime(),
	blocks: [
		{
			type: "header",
			data: {
				text: "This is my awesome editor!",
				level: 1,
			},
		},
	],
};
 * @returns
 */

const WpInput = ({ setEditorData }: Props) => {
	useEffect(() => {
		// Initialize the editor with some dummy data
		setEditorData({
			time: new Date().getTime(),
			...convertWPToEditorJS(dummyData),
		});
	}, [setEditorData]);

	return (
		<input
			className="border-2 border-gray-300"
			// onChange={(e) => setEditorData()}
		/>
	);
};

export default WpInput;
