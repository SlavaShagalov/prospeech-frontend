import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";

import { AppDispatch, RootState } from "../../services/state/store";
import { getAsync } from "../../services/state/audio/audioSlice";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

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
