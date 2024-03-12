import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

const ExercisesPage = () => {
    return (
        <div className="bg-white h-screen w-full flex">
            <LeftSidebar></LeftSidebar>
            <div className="pt-6 px-8">
                <h1 className="text-xl mb-4">Exercises</h1>
            </div>
        </div>
    );
}

export default ExercisesPage;
