import Link from "next/link";

export default function Navbar({isLanding, isMessage}) {
    const linkStyling = `text-gray-500 hover:text-pink-400 focus:text-pink-400 ${!isLanding && "hidden sm:inline"}`

    return <div className="absolute top-0 right-0 p-4 w-full flex justify-between items-center font-display bg-white z-50">
        <Link href="/">
            <a className="font-semibold text-gray-700 text-xl">
                Valentine's Day<span className="font-sans text-pink-300 font-light">@</span>Brown
            </a>
        </Link>
        <div className="space-x-4 md:space-x-6">
            <Link href="/about">
                <a className={linkStyling}>About</a>
            </Link>
            {!isLanding && !isMessage && <Link href="/message">
                <a className="red-link">Send a message &rarr;</a>
            </Link>}
        </div>
    </div>
}
