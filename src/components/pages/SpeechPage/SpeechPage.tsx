import { useEffect, useState } from "react";

import LeftSidebar from "../../LeftSidebar/LeftSidebar";
import FileUploadModal from "../../FileUploadModal";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store";
import { getAsync } from "../../../state/audios/audiosSlice";

const SpeechPage = () => {
    const audios = useSelector((state: RootState) => state.audios.audios);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAsync());
    }, []);

    return (
        <div className="bg-white h-screen w-full flex">
            <LeftSidebar></LeftSidebar>
            <div className="pt-6 px-8">
                SpeechPage
            </div>
        </div>
    );
}

export default SpeechPage;
