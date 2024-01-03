export async function getStats() {
	const response = await fetch('http://localhost:3000/healthz');
	const json = await response.json();
	console.log(`Turbo ~ file: stats.js:4 ~ getStats ~ text:`, json.status);
}

await getStats();