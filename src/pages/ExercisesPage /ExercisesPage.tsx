import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import ExerciseCard from "./ExerciseCard";


const exercises = [
    {
        name: "Быстрая аналогия",
        description: "Быстро придумывайте аналогии, не позволяя давлению влиять на вас.",
        link: "/exercises/fast-analog",
    },
    {
        name: "Быстрая аналогия 2",
        description: "Быстро придумывайте аналогии, не позволяя давлению влиять на вас.",
        link: "/exercises/fast-analog",
    },
    {
        name: "Быстрая аналогия 3",
        description: "Быстро придумывайте аналогии, не позволяя давлению влиять на вас.",
        link: "/exercises/fast-analog",
    },
];

const ExercisesPage = () => {
    return (
        <div className="bg-white h-screen w-full flex">
            <LeftSidebar></LeftSidebar>
            <div className="pt-6 px-8">
                <h1 className="text-xl mb-4">Упражнения</h1>
                <div className="flex flex-wrap justify-around gap-10">
                    {exercises.map((exercise) => (
                        <ExerciseCard name={exercise.name} description={exercise.description} link={exercise.link}></ExerciseCard>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default ExercisesPage;
