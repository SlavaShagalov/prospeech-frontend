import { Link } from "react-router-dom";
import UploadBtn from "../ui/buttons/UploadBtn";
import { AppDispatch } from "../../services/state/store";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../../services/state/user/userSlice";

const menuItems = [
    {
        name: "Практика",
        link: "/practice",
        icon_link: "/assets/man_speak.svg",
    },
    {
        name: "Выступления",
        link: "/speeches",
        icon_link: "/assets/save.svg",
    },
    {
        name: "Упражнения",
        link: "/exercises",
        icon_link: "/assets/exercise.svg",
    },
];

const LeftSidebar = () => {
    const dispatch = useDispatch<AppDispatch>()

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

            <div className="flex items-center justify-center">
                <UploadBtn className="w-40" onClick={() => {dispatch(logoutAsync())}}>Выйти</UploadBtn>
            </div>
        </div>
    );
}

export default LeftSidebar;
