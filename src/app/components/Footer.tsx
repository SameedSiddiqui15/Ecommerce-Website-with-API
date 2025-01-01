import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 p-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <p className="text-sm text-center md:text-left text-gray-500">
                    &copy; latest 2024 <span className="text-cyan-500 font-semibold hover:text-cyan-600">Sameed&rsquo;s Shoes</span> — All Rights Reserved
                </p>

                <nav className="flex flex-wrap justify-center gap-4 text-gray-400 font-medium">
                    <Link href="/" className="text-cyan-300 hover:text-cyan-600 transition-colors">Home</Link>
                    <Link href="/" className="text-cyan-300 hover:text-cyan-600 transition-colors">About Us</Link>
                    <Link href="/" className="text-cyan-300 hover:text-cyan-600 transition-colors">Delivery</Link>
                    <Link href="/" className="text-cyan-300 hover:text-cyan-600 transition-colors">Contact Us</Link>
                </nav>

                <div className="flex justify-center space-x-4">
                    <Link href="https://www.facebook.com/taha.siddiqui.334839/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/facebook-new.png" alt="Facebook" className="hover:opacity-80 transition-opacity" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/sameed-siddiqui-/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/linkedin-2.png" alt="LinkedIn" className="hover:opacity-80 transition-opacity" />
                    </Link>
                    <Link href="https://www.instagram.com/maybe_sameed/?igsh=MWRrcWRpZ3Fwbm15bQ%3D%3D" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/instagram-new.png" alt="Instagram" className="hover:opacity-80 transition-opacity" />
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/twitter.png" alt="Twitter" className="hover:opacity-80 transition-opacity" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}