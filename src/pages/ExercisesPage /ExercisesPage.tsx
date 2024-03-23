import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import ExerciseCard from "./ExerciseCard";

const ExercisesPage = () => {
    return (
        <div className="bg-white h-screen w-full flex">
            <LeftSidebar></LeftSidebar>
            <div className="pt-6 px-8">
                <h1 className="text-xl mb-4">Упражнения</h1>
                <ExerciseCard></ExerciseCard>
            </div>
        </div>
    );
}

export default ExercisesPage;
