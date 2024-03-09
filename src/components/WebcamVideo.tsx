import React from "react";
import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    // aspectRatio: 0.6666666667,
    facingMode: "user",
    width: { min: 640 },
    height: { min: 480 },
};

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

    const handleStartCaptureClick = useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current!.stream!, {
            mimeType: "video/webm"
        });
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
                type: "video/webm"
            });
            const formData = new FormData();
            formData.append("file", blob, "new_speech.webm");

            const requestOptions: RequestInit = {
                method: "POST",
                credentials: "include",
                body: formData,
            };

            try {
                const response = await fetch(
                    "http://127.0.0.1/api/v1/audios",
                    requestOptions
                );
                if (response.ok) {
                    setRecordedChunks([]);
                    const data = await response.json();
                    return data;
                } else {
                    console.error("Failed to fetch audio list");
                }
            } catch (error) {
                console.error("Error fetching audio list:", error);
            }
        }
    }, [recordedChunks]);

    return (
        <>
            <Webcam
                width={640} height={480} videoConstraints={videoConstraints}
                mirrored={true}
                audioConstraints={audioConstraints}
                audio={true} 
                muted={true}
                ref={webcamRef}
            />
            {capturing ? (
                <button onClick={handleStopCaptureClick}>Stop Capture</button>
            ) : (
                <button onClick={handleStartCaptureClick}>Start Capture</button>
            )}
            {recordedChunks.length > 0 && (
                <button onClick={handleDownload}>Send to server</button>
            )}
        </>
    );
}

export default WebcamVideo;
