import Link from 'next/link';
import Navbar from "./Navbar";
import ContactComponent from './ContactComponents';


export default function () {

    return <div className="font-display max-w-screen-sm">
        <Navbar isLanding/>
        <embed src="/bears/landing_bear.svg" className="rounded-lg mb-6 h-64 mx-auto"/>
        <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-pink-400">Valentine's Day<span className="font-sans text-pink-200 font-light">@</span>Brown</h1>
            <p className="text-xl text-gray-500">Send someone you love a message this Valentine's Day! All messages are anonymous and will be sent out February 14th.</p>
            {/* <div className="mt-4"> */}
                {/* <div className="contactme" id ="contact">
                    <div className="contactOverlay">
                        <div className="container">
                            <div className="form">
                                <ContactComponent></ContactComponent>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Link href="/message">
                    <a className="bg-pink-500 block md:inline-block font-medium text-lg rounded-lg py-3 font-display transition-all duration-200 font-medium hover:bg-pink-400 focus:bg-pink-400 px-12 mt-8 text-white">
                        Send a Message
                    </a>
                </Link>
            {/* </div> */}
        </div>
    </div>
}