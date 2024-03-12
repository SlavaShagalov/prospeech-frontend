import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../services/state/store";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Table from "../../components/Table";
import FileUploadModal from "../../components/FileUploadModal";
import { getAsync } from "../../services/state/audios/audiosSlice";
import UploadBtn from "../../components/ui/buttons/UploadBtn";
import Spinner from "../../components/ui/Spinner";

const SpeechesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const audios = useSelector((state: RootState) => state.audios.audios)
    const audiosStatus = useSelector((state: RootState) => state.audios.status)
    const error = useSelector((state: RootState) => state.audios.error)

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (audiosStatus === 'idle') {
            dispatch(getAsync())
        }
    }, [audiosStatus, dispatch])

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);

    let content
    console.log("SpeechesPage", "status", audiosStatus);
    if (audiosStatus === 'loading') {
        // content =  <div className="h-20"><Spinner /></div>
        content =  <Spinner />
    } else if (audiosStatus === 'succeeded') {
        content = <Table data={audios} />
    } else if (audiosStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <div className="bg-white h-screen w-full flex">
            <LeftSidebar></LeftSidebar>
            <div className="pt-6 px-8">
                <h1 className="text-xl mb-4">Records</h1>
                <UploadBtn className="w-24 h-10 mb-4" onClick={openModal}>Upload</UploadBtn>
                {content}
                {isModalOpen && <FileUploadModal onClose={closeModal} />}
            </div>
        </div>
    );
}

export default SpeechesPage;
