import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-black shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                            My-Hospital
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-8">
                        <Link
                            href="/"
                            className=" text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                        >
                            Home
                        </Link>
                        <Link
                            href="/feedback"
                            className=" text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                        >
                            Feedback
                        </Link>
                        <Link
                            href="/auth/login"
                            className=" text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                        >
                            Login/Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
