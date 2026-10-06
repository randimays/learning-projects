import Link from "next/link";

export default function community() {
	return (
		<>
			<h1>Community</h1>
			<p><Link href="/meals/share">Share meals</Link></p>
			<p><Link href="/meals">Meals</Link></p>
		</>
	);
}