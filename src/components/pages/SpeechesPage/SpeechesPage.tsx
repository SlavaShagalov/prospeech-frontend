import { useEffect, useState } from "react";

import LeftSidebar from "../../LeftSidebar/LeftSidebar";
import FileUploadModal from "../../FileUploadModal";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store";
import { getAsync } from "../../../state/audios/audiosSlice";
import { Link } from "react-router-dom";

const SpeechesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const audios = useSelector((state: RootState) => state.audios.audios);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAsync());
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-white h-screen w-full flex">
            <LeftSidebar></LeftSidebar>
            <div className="pt-6 px-8">
                <h1 className="text-xl mb-4">Records</h1>
                <button className="bg-gradient-to-br from-blue-300 to-purple-600 hover:from-blue-500 hover:to-purple-800 
                                    w-24 h-10 rounded-xl" onClick={openModal}>
                    Upload
                </button>

                <h2 className="font-bold text-lg mb-4">Список аудиозаписей</h2>
                {/* <Item audios={data?.audios}></Item> */}

                <ul className="divide-y divide-gray-200">
                    {audios.map((audio) => (
                        <li key={audio.id} className="py-4">
                            <audio controls>
                                <source src={audio.url} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                            <Link to={`/speeches/${audio.id}`} className="ml-2">
                                {audio.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {isModalOpen && <FileUploadModal onClose={closeModal} />}
            </div>
        </div>
    );
}

export default SpeechesPage;
