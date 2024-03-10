import { Link } from "react-router-dom";

const menuItems = [
    {
        name: "Practice",
        link: "/practice",
        icon_link: "/assets/man_speak.svg",
    },
    {
        name: "Speeches",
        link: "/speeches",
        icon_link: "/assets/save.svg",
    },
    {
        name: "Exercises",
        link: "/exercises",
        icon_link: "/assets/exercise.svg",
    },
];

const LeftSidebar = () => {
    return (
        <div className="bg-gray-200 w-56 h-full">
            <div className="pt-2 px-2 flex justify-between">
                <Link to={"/"} className="flex">
                    <img src="/assets/logo.svg" alt="ProSpeech logo" />
                    <p className="ml-2 font-bold mr-auto">
                        Pro<br />Speech
                    </p>
                </Link>
                <img src="/assets/arrow_back.svg" alt="Back" />
            </div>

            <ul className="my-4">
                {menuItems.map((item) => (
                    <Link key={item.name} to={item.link}>
                        <li className="hover:bg-gray-300 h-14 px-4 py-2 flex items-center">
                            <img src={item.icon_link} alt={item.name} className="mr-7" />
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default LeftSidebar;
