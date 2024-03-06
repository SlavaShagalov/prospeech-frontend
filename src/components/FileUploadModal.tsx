import { useState } from "react";

interface FileUploadModalProps {
    onClose: () => void;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({ onClose }) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        // Здесь можно реализовать отправку файла на сервер
        console.log('Uploading file:', file);
        onClose();
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="relative px-5 py-5 bg-gray-50 rounded-lg w-150">
                    <div className="flex justify-end">
                        <img src="/assets/close.svg" alt="Back" />
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <h2 className="text-lg font-medium">Upload your video or audio</h2>
                        <p className="text-center">
                            Upload MP4 or WebM videos, or any type of audio file<br />
                            Please limit file duration to no more than 2 hours
                        </p>
                        <div className="w-full h-32 bg-red-500">Drop Zone</div>
                        {/* <input type="file" onChange={handleFileChange} /> */}
                        <button
                            className="bg-gray-400 
                                    w-full h-10 rounded-xl"
                            onClick={handleUpload}
                            disabled={!file}
                        >
                            Upload
                        </button>
                        <button
                            className="bg-purple-400 hover:bg-purple-600 
                                    w-full h-10 rounded-xl"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileUploadModal;
