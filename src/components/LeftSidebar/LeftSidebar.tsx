import { Link } from "react-router-dom";

const LeftSidebar = () => {
    return (
        <div className="bg-gray-200 w-56 h-full">
            <div className="pt-2 px-2 flex justify-between">
                <Link to={"/"}>
                    <img src="/assets/logo.svg" alt="ProSpeech logo" />
                </Link>
                <p className="ml-2 font-bold mr-auto">
                    Pro<br />Speech
                </p>
                <img src="/assets/arrow_back.svg" alt="Back" />
            </div>
        </div>
    );
}

export default LeftSidebar;
