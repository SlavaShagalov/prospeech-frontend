import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LeftSidebar from "../../LeftSidebar/LeftSidebar";
import FileUploadModal from "../../FileUploadModal";

import { AppDispatch, RootState } from "../../../state/store";
import { getAsync } from "../../../state/audios/audiosSlice";
import Table from "../../Table";

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
                                    w-24 h-10 mb-4 rounded-xl" onClick={openModal}>
                    Upload
                </button>
                {/* <Item audios={data?.audios}></Item> */}

                {/* <ul className="divide-y divide-gray-200">
                    {audios.map((audio) => (
                        <li key={audio.id} className="py-4">
                            <ReactPlayer url={audio.url} controls />
                            <Link to={`/speeches/${audio.id}`} className="ml-2">
                                {audio.title}
                            </Link>
                        </li>
                    ))}
                </ul> */}

                <Table data={audios}/>
                {isModalOpen && <FileUploadModal onClose={closeModal} />}
            </div>
        </div>
    );
}

export default SpeechesPage;
