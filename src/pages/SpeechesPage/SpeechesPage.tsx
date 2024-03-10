import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AppDispatch, RootState } from "../../services/state/store";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Table from "../../components/Table";
import FileUploadModal from "../../components/FileUploadModal";
import { getAsync } from "../../services/state/audios/audiosSlice";

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
                <Table data={audios}/>
                {isModalOpen && <FileUploadModal onClose={closeModal} />}
            </div>
        </div>
    );
}

export default SpeechesPage;
