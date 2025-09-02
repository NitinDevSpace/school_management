import mysql from "mysql2/promise";

// Create a connection pool (reusable across requests)
export const pool = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	ssl: { rejectUnauthorized: true }, // required for TiDB Cloud
});

// Function to test DB connection and log result
async function testDbConnection() {
	try {
		await pool.query("SELECT 1");
		console.log("✅ Database connected successfully");
	} catch (error) {
		console.error("❌ Database connection failed:", error.message);
	}
}

// Test DB connection immediately on module load
testDbConnection();
