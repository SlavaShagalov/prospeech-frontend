import { useState } from "react";
import LeftSidebar from "../../LeftSidebar/LeftSidebar";
import FileUploadModal from "../../FileUploadModal";

const RecordsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
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
                {isModalOpen && <FileUploadModal onClose={closeModal} />}
            </div>
        </div>
    );
}

export default RecordsPage;

// className={`bg-green-600 hover:bg-green-700 
//                             text-white font-bold 
//                             px-4 py-2 rounded 
//                             cursor-pointer 
//                             focus:outline-none focus:shadow-outline 
//                             ${className}`}
