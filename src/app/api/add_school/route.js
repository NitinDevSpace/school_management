import { pool } from "@/lib/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
	try {
		const formData = await req.formData();
		const name = formData.get("name");
		const address = formData.get("address");
		const city = formData.get("city");
		const state = formData.get("state");
		const contact = formData.get("contact");
		const email_id = formData.get("email_id");
		const imageFile = formData.get("image");

		let filename = null;
		if (imageFile && imageFile.size > 0) {
			const buffer = Buffer.from(await imageFile.arrayBuffer());
			const ext = path.extname(imageFile.name);
			filename = `${Date.now()}${ext}`;
			const filePath = path.join(process.cwd(), "public", "schoolImages", filename);
			const dir = path.dirname(filePath);
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir, { recursive: true });
			}
			fs.writeFileSync(filePath, buffer);
		}

		// Note: database schema's `image` column should store the filename (string), not a URL
		const [result] = await pool.query(
			"INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
			[name, address, city, state, contact, email_id, filename]
		);

		return NextResponse.json(
			{
				message: "School added successfully",
				id: result.insertId,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: "Database error" }, { status: 500 });
	}
}
