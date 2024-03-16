import { Link } from "react-router-dom";


const RightSidebar = () => {
    // const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="bg-gray-200 h-full">
            <div className="bg-purple-200 w-full h-14 px-2 py-2 flex items-center justify-center">
                {/* <img src="/assets/arrow_back.svg" alt="Back" /> */}
                {/* <div className="w-full flex items-center justify-center"> */}
                <p>Ваши результаты</p>
                {/* </div> */}
            </div>

            <div className="w-full px-2 py-2 flex flex-col gap-3">
                {/* <img src="/assets/arrow_back.svg" alt="Back" /> */}
                {/* <div className="w-full flex items-center justify-center"> */}
                <p>🏅 Что прошло хорошо</p>

                <div className="bg-gray-300 h-8 px-2 rounded-lg flex items-center justify-between">
                    <p>Скорость речи</p>
                    <p>56 слов/мин</p>
                </div>


                <div className="bg-gray-300 h-8 px-2 rounded-lg flex items-center justify-between">
                    <p>Скорость речи</p>
                    <p>56 слов/мин</p>
                </div>


                <div className="bg-gray-300 h-8 px-2 rounded-lg flex items-center justify-between">
                    <p>Скорость речи</p>
                    <p>56 слов/мин</p>
                </div>

                <p>💡 Что могло быть лучше</p>
                
                <div className="bg-gray-300 h-8 px-2 rounded-lg flex items-center justify-between">
                    <p>Скорость речи</p>
                    <p>56 слов/мин</p>
                </div>


                <div className="bg-gray-300 h-8 px-2 rounded-lg flex items-center justify-between">
                    <p>Скорость речи</p>
                    <p>56 слов/мин</p>
                </div>


                <div className="bg-gray-300 h-8 px-2 rounded-lg flex items-center justify-between">
                    <p>Скорость речи</p>
                    <p>56 слов/мин</p>
                </div>
            </div>
        </div>
    );
}

export default RightSidebar;
