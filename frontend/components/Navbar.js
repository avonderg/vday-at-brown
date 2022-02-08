import Link from "next/link";

export default function Navbar({isLanding, isMessage}) {
    const linkStyling = `font-semibold text-pink-400 hover:text-pink-300 focus:text-pink-300 ${!isLanding && "hidden sm:inline"}`

    return <div className="absolute top-0 right-0 p-4 w-full flex justify-between items-center font-display bg-white z-50">
        <Link href="/">
            <a className="font-semibold hover:text-pink-400 text-pink-700 text-xl">
                V-Day<span className="font-sans text-pink-300 font-light">@</span>Brown
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
