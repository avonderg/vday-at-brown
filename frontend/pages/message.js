import Landing from "../components/Landing";
import Link from 'next/link';
import ContactComponent from "../components/ContactComponents";
import Navbar from "../components/Navbar";

export default function Message() {
    return (
        <div>
            <Navbar isMessage/>
            <div className="full-height flex justify-center px-4 items-center">
            <ContactComponent/>
            </div>
        </div>

    )
}
