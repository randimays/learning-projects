import Link from "next/link";

export default function MealsPage() {
	return (
		<>
			<h1>Meals</h1>
			<p><Link href="/meals/share">Share meals</Link></p>
			<p><Link href="/community">Community</Link></p>
		</>
	);
}