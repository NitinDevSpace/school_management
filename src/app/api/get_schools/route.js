import { pool } from "@/lib/db";

export async function GET() {
	try {
		// Query all schools
		const [rows] = await pool.query(
			"SELECT id, name, address, city, image FROM schools"
		);

		return new Response(JSON.stringify(rows), { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Database error" }), {
			status: 500,
		});
	}
}
