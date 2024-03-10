import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

import LeftSidebar from "../../LeftSidebar/LeftSidebar";
import FileUploadModal from "../../FileUploadModal";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store";
import { getAsync } from "../../../state/audio/audioSlice";
import Audio from "./../../../models/Audio";
import ReactPlayer from "react-player";

const SpeechPage = () => {
    const { id } = useParams();

    const audio = useSelector((state: RootState) => state.audio.audio);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAsync(Number(id!)));
    }, []);

    return (
        <div className="bg-white h-screen w-full flex">
            <LeftSidebar></LeftSidebar>
            <div className="pt-6 px-8">
                <h1 className="text-xl mb-4">{audio?.title}</h1>
                <ReactPlayer url={audio?.url} controls />
            </div>
        </div>
    );
}

export default SpeechPage;
