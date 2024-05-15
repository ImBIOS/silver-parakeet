"use client";
import { type OutputData } from "@editorjs/editorjs";

export function convertWPToEditorJS(html: string): {
	blocks: OutputData["blocks"];
} {
	const parser = new DOMParser();
	const doc = parser.parseFromString(html, "text/html");
	const blocks: OutputData["blocks"] = [];

	for (const node of doc.body.childNodes) {
		if (node.nodeType === Node.ELEMENT_NODE) {
			const element = node as HTMLElement;

			switch (element.tagName.toLowerCase()) {
				case "h2":
				case "h3":
				case "h4":
					blocks.push({
						type: "header",
						data: {
							text: element.textContent || "",
							level: parseInt(element.tagName[1], 10),
							style: element.className || undefined,
						},
					});
					break;
				case "p":
					blocks.push({
						type: "paragraph",
						data: {
							text: element.innerHTML,
						},
					});
					break;
				case "ul": {
					const items: string[] = [];
					for (const li of element.querySelectorAll("li")) {
						items.push(li.textContent || "");
					}
					blocks.push({
						type: "list",
						data: {
							items,
						},
					});
					break;
				}
				case "div": {
					// Handle divs, potentially with specific logic for different types
					const heading = element.querySelector("p,strong");
					if (heading) {
						blocks.push({
							type: "header",
							data: {
								text: heading.textContent || "",
								level: 3, // Assuming a default level, adjust as needed
							},
						});
					}
					break;
				}
				// Extend with more cases as needed
			}
		}
	}

	return { blocks };
}
