import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import WebcamVideo from "../../components/WebcamVideo";

const PracticePage = () => {
    return (
        <div className="bg-white h-screen w-full flex">
            <LeftSidebar></LeftSidebar>
            <div className="w-full pt-6 px-8">
                <h1 className="text-xl mb-4">Practice</h1>
                <div className="w-full flex items-center justify-center">
                    <WebcamVideo />
                </div>
            </div>
        </div>
    );
}

export default PracticePage;
