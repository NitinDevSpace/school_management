import { pool } from "@/lib/db";

export async function POST(req) {
	try {
		const body = await req.json();
		const { name, address, city, state, contact, email_id, image } = body;

		const [result] = await pool.query(
			"INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
			[name, address, city, state, contact, email_id, image]
		);

		return new Response(
			JSON.stringify({
				message: "School added successfully",
				id: result.insertId,
			}),
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Database error" }), {
			status: 500,
		});
	}
}
