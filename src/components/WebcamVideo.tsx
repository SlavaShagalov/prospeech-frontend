import React from "react";
import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import UploadBtn from "./ui/buttons/UploadBtn";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../services/state/store";
import { addAsync } from "../services/state/audios/audiosSlice";
import { useNavigate } from "react-router-dom";

const videoConstraints = {
    // aspectRatio: 0.6666666667,
    facingMode: "user",
    width: { min: 640 },
    height: { min: 480 },
};

// https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/mimeType

const audioConstraints = {
    suppressLocalAudioPlayback: true,
    noiseSuppression: true,
    echoCancellation: true,
};

const WebcamVideo: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [capturing, setCapturing] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleStartCaptureClick = useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current!.stream!,
            {
                mimeType: "video/webm"
            }
        );
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = React.useCallback(
        ({ data }: { data: any }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const handleStopCaptureClick = React.useCallback(() => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setCapturing(false);
        }
    }, [mediaRecorderRef, webcamRef, setCapturing]);

    const handleDownload = React.useCallback(async () => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: "video/mp4"
            });
            const file = new File([blob], 'new_speech.mp4', { type: "video/mp4" });

            dispatch(addAsync(file));
        }
    }, [recordedChunks]);

    return (
        <div className="flex flex-col items-center">
            <Webcam
                width={640} height={480} videoConstraints={videoConstraints}
                mirrored={true}
                audioConstraints={audioConstraints}
                audio={true}
                muted={true}
                ref={webcamRef}
                className="mb-4"
            />
            {capturing ? (
                <UploadBtn className="w-32 h-10" onClick={handleStopCaptureClick}>Остановить</UploadBtn>
            ) : (
                <UploadBtn className="w-32 h-10" onClick={handleStartCaptureClick}>Начать</UploadBtn>
            )}
            {recordedChunks.length > 0 && (
                <UploadBtn className="mt-4 w-32 h-10" onClick={handleDownload}>Загрузить</UploadBtn>
            )}
        </div>
    );
}

export default WebcamVideo;
