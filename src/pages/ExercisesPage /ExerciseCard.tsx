import { Link } from "react-router-dom";
import UploadBtn from "../../components/ui/buttons/UploadBtn";

const ExerciseCard = () => {
    return (
        <div className="bg-purple-100 w-80 h-96 rounded-xl flex flex-col items-center justify-center">
            <img src="/assets/ex_speed_analog.webp" alt="Speed" className="w-52 h-52" />
            <h2 className="text-lg font-medium mb-2">Быстрая аналогия</h2>
            <p className="text-center mb-2">Быстро придумывайте аналогии, не позволяя давлению влиять на вас.</p>
            <Link to={"/exercises/fast-analog"}>
                <UploadBtn className="h-10">Начать упражнение</UploadBtn>
            </Link>
        </div>
    );
}

export default ExerciseCard;
