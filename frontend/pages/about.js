import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";

const team = [{
    name: "anon (✿◠‿◠)",
    role: "",
    image: "/bears/sam_bear.svg"
    // linkedIn: "www.linkedin.com/in/nthnluu",
    // github: "https://github.com/nthnluu",
    // website: "https://nthnluu.com"
}, {
    name: "anon (✿ ♥‿♥)",
    role: "",
    image: "/bears/alex_bear.svg"}]
    // linkedIn: "https://www.linkedin.com/in/jasper-chen-1b8b98197",
    // github: "https://github.com/Jasch3n",
    // website: "https://jasch3n.github.io/mySite"
// }, {
//     name: "Abby Powell",
//     role: "Frontend Developer",
//     image: "https://ventureatbrown.com/bears/experienced_pink.svg",
//     linkedIn: "https://www.linkedin.com/in/abigail-powell-75705b173",
//     github: "https://github.com/abigail-powell",
//     website: "https://nthnluu.com"
// }, {
//     name: "Aaron Wang",
//     role: "Project Manager",
//     image: "https://ventureatbrown.com/bears/experienced_green.svg",
//     linkedIn: "https://linkedin.com/in/aaronjwang",
//     github: "https://github.com/aaronwangj",
//     website: "https://aaronjwang.com"
// }]


const About = () => {
    const buttonStyle = "text-gray-400 hover:text-gray-300 focus:text-gray-200 transition-all duration-200"
    return <>
        <Head>
            <title>About | Valentine's Day@Brown</title>
        </Head>
        <div className="max-w-3xl mx-auto px-4 my-24">
            <Navbar/>
            <h1 className="text-5xl font-bold text-gray-900 font-display">About</h1>
            <section>
                <p className="text-xl text-gray-400 my-4">
                Virtual candy grams have arrived this Valentine's Day! This site was created by two hopeless romantics who decided it’s about time the Brown student body was shown a little love! After realizing there was no way to anonymously send valentines, we created this site as a fun way for students to show their appreciation for each other (or, ya know, confess their feelings to that special someone). We will be accepting messages until Feb 13th at midnight. The recipient will recieve an e-card and all messages are anonymous. Happy Valentine’s day everyone!
                </p>
            </section>
            <section className="mt-16">
                <h2 className="font-display text-2xl font-semibold mb-4 text-gray-800">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {team.map((person, index) => <div className="font-medium leading-tight" key={index}>
                        <embed className="h-56 w-full object-cover rounded-lg shadow-sm"
                               alt=""
                               src={person.image}/>
                        <h3 className="text-xl font-semibold text-gray-700 mt-4">{person.name}</h3>
                        <h4 className="text-lg text-gray-400">{person.role}</h4>
                        {}
                    </div>)}

                </div>
            </section>
        </div>
    </>
}

export default About
