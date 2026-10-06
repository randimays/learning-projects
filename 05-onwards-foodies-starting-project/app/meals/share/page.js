import Link from "next/link";

export default function share() {
	return (
		<>
			<h1>Share</h1>
			<p><Link href="/meals">Meals</Link></p>
			<p><Link href="/community">Community</Link></p>
		</>
	);
}