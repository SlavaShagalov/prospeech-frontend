import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../services/state/store";
import { addAsync } from "../services/state/audios/audiosSlice";
import UploadBtn from "./ui/buttons/UploadBtn";

interface FileUploadModalProps {
    onClose: () => void;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({ onClose }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);

    const dispatch = useDispatch<AppDispatch>();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (file) {
            dispatch(addAsync(file));
        }
        setFile(null);
        onClose();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="relative px-5 py-5 bg-gray-50 rounded-lg w-150">
                    <div className="flex justify-end">
                        <img src="/assets/close.svg" alt="Back" onClick={onClose} className="cursor-pointer" />
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <h2 className="text-lg font-medium">Загрузите свое видео или аудио</h2>
                        <p className="text-center">
                            Загрузите видео в формате MP4 или WebM или аудиофайл любого типа<br />
                            Пожалуйста, ограничьте продолжительность файла не более чем 2 часами
                        </p>
                        <div
                            className={`w-full ${!file && "h-64"} border-dashed border-2 border-gray-400}`}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                        >
                            {file
                                ? <p>{file.name}</p>
                                : <div className="h-full flex flex-col items-center justify-center">
                                    <p className="text-gray-500 mb-2">Перетащите файл или</p>
                                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                                    <UploadBtn className="h-10" onClick={() => fileInputRef.current?.click()}>
                                        Выбрать файл
                                    </UploadBtn>
                                </div>
                            }
                        </div>
                        <button
                            className={`w-full h-10 rounded-xl 
                            ${!file
                                    ? "bg-gray-300 opacity-60"
                                    : "bg-gradient-to-br from-blue-300 to-purple-600 hover:from-blue-500 hover:to-purple-800"}`}
                            onClick={handleUpload}
                            disabled={!file}
                        >
                            Загрузить
                        </button>
                        <button
                            className="bg-violet-400 hover:bg-violet-600 
                                    w-full h-10 rounded-xl"
                            onClick={onClose}
                        >
                            Отмена
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileUploadModal;
