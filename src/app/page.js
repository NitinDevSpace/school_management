import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-12">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center">
        Welcome to School Management
      </h1>
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-4xl">
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center space-y-6 hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-700 text-lg">
            Add a new school to your management system quickly and easily.
          </p>
          <Link
            href="/add_school"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors duration-300"
          >
            Add School
          </Link>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center space-y-6 hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-700 text-lg">
            View and manage all schools in your system at a glance.
          </p>
          <Link
            href="/show_schools"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors duration-300"
          >
            View Schools
          </Link>
        </div>
      </div>
    </div>
  );
}
