import WpToEditor from "./_components/wp-to-editor";

export default function EditorPage() {
	return (
		<main className="container">
			<h1 className="text-4xl font-bold text-center">
				Cool.org WP to EditorJS Converter
			</h1>
			<WpToEditor />
		</main>
	);
}
