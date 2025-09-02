"use client";
import React, { useEffect, useState } from "react";

export default function ShowSchools() {
	const [schools, setSchools] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchSchools() {
			try {
				const res = await fetch("/api/get_schools");
				if (!res.ok) {
					throw new Error("Failed to fetch schools");
				}
				const data = await res.json();
				setSchools(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		fetchSchools();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-gray-500 text-lg">Loading schools...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-red-500 text-lg">{error}</p>
			</div>
		);
	}

	return (
		<div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center ">
			<div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
				<h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
					Schools
				</h1>
				<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{schools.map((school) => (
						<div
							key={school.id || school._id}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
						>
							<img
								src={school.image || "/placeholder-image.png"}
								alt={school.name}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h2 className="text-xl font-semibold mb-2 text-gray-900">
									{school.name}
								</h2>
								<p className="text-gray-900">{school.address}</p>
								<p className="text-gray-900">{school.city}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
