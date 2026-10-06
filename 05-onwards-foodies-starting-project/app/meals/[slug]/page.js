import Link from "next/link";

export default function meal({ params }) {
	return (
		<>
			<h1>Specific meal {params.slug}</h1>
			<p><Link href="/meals">Meals</Link></p>
			<p><Link href="/meals/share">Share meals</Link></p>
			<p><Link href="/community">Community</Link></p>
		</>
	);
}