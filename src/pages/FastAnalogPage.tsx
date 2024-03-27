import { useState } from "react";
import UploadBtn from "../components/ui/buttons/UploadBtn";
import { padZeros } from "../utils/format";
import CircularProgressBar from "../components/ui/CircularProgressBar";

const MIN_N_PROMPTS = 3;
const MAX_N_PROMPTS = 25;
const DEFAULT_N_PROMPTS = 5;

const MIN_TIME = 2;
const MAX_TIME = 10;
const DEFAULT_TIME = 6;

const prompts = [
    "Игра в шахматы похожа на слона, потому что...",
    "Садоводство похоже на воду, потому что...",
    "Играть в видеоигры — все равно, что чесать спину, потому что…",
    "Подниматься по лестнице - это как бензин, потому что...",
    "Использование зубной нити похоже на путешествие, потому что...",
    
    "Подготовка к выпускным экзаменам похожа на езду на велосипеде, потому что...",
    "Езда на велосипеде похожа на публичное выступление, потому что...",
    "Подготовка к выпускным экзаменам похожа на езду на велосипеде, потому что...",
    "Органическая химия похожа на сафари, потому что...",
    "Есть моллюсков — это все равно, что носить штаны, потому что...",
    "Батончик мюсли похож на ананас, потому что...",
];

const FastAnalogPage = () => {
    const [numPrompts, setNumPrompts] = useState(DEFAULT_N_PROMPTS);
    const [time, setTime] = useState(DEFAULT_TIME);
    const [state, setState] = useState<"setup" | "started" | "finished">("setup");
    const [curIdx, setCurIdx] = useState(0);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        setNumPrompts(newValue);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        setTime(newValue);
    };

    let content;
    if (state === "setup") {
        content = <div className="bg-white w-160 h-80 p-8 rounded-xl flex flex-col">
            <h1 className="mb-4 text-2xl text-center">Быстрая аналогия</h1>
            <div className="flex justify-between mb-4">
                <p></p>
                {/* <p>Как выполнять</p> */}
                <UploadBtn onClick={() => setState("started")}>Начать</UploadBtn>
            </div>

            <div className="mb-4">
                <div className="flex justify-between">
                    <label htmlFor="n-prompts">Установите количество предложений</label>
                    <p>{numPrompts}</p>
                </div>
                <input id="n-prompts" type="range" min={MIN_N_PROMPTS} max={MAX_N_PROMPTS} value={numPrompts} onChange={handleFileChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                <div className="flex justify-between">
                    <p>{MIN_N_PROMPTS}</p>
                    <p>{MAX_N_PROMPTS}</p>
                </div>
            </div>

            <div className="flex justify-between">
                <label htmlFor="time">Установите время между предложений</label>
                <p className="font-bold text-xl text-purple-500">0:{padZeros(time)}</p>
            </div>
            <input id="time" type="range" min={MIN_TIME} max={MAX_TIME} value={time} onChange={handleTimeChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            <div className="flex justify-between">
                <p>0:{padZeros(MIN_TIME)}</p>
                <p>0:{padZeros(MAX_TIME)}</p>
            </div>
        </div>
    } else if (state === "started") {
        content = <div className="bg-white w-160 h-96 p-8 rounded-xl flex flex-col">
            <h1 className="mb-4 text-2xl text-center">{prompts[curIdx]}</h1>
            <CircularProgressBar totalTime={time * 1000} onComplete={() => {
                console.log(curIdx + 1);
                console.log(numPrompts);
                if (curIdx + 1 === numPrompts) {
                    setState("finished");
                }
                setCurIdx((prev) => prev + 1);
            }} />
        </div>
    } else if (state === "finished") {
        content = <div className="bg-white w-160 p-8 rounded-xl flex flex-col">
            <h1 className="mb-4 text-purple-900 font-bold text-2xl text-center">Великолепно!</h1>
            <p className="mb-2 font-medium">Ваши предложения:</p>
            {prompts.map((prompt, idx) => (
                idx < numPrompts
                    ? <div key={idx} className="bg-gray-200 w-full p-2 mb-2 rounded-xl">
                        {prompt}
                    </div>
                    : <></>
            ))}
        </div>
    }

    return (
        <div className="bg-purple-200 h-screen w-full flex items-center justify-center">
            {content}
        </div>
    );
}

export default FastAnalogPage;
