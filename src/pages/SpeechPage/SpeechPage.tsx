import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";

import { AppDispatch, RootState } from "../../services/state/store";
import { deleteAsync, getAsync } from "../../services/state/audio/audioSlice";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import { padZeros } from "../../utils/format";
import DropdownMenu from "../../components/ui/buttons/DropdownMenu";

const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
];

const SpeechPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const audio = useSelector((state: RootState) => state.audio.audio);

    let formattedDate = "";
    if (audio) {
        let date = new Date(audio!.created_at.toString());
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const yearIndex = date.getFullYear();
        const hours = padZeros(date.getHours());
        const minutes = padZeros(date.getMinutes());
        const monthName = months[monthIndex];
        formattedDate = `${day} ${monthName} ${yearIndex} г. в ${hours}:${minutes}`;
    }

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAsync(Number(id!)));
    }, [dispatch, id]);

    const onDelete = () => {
        console.log("handleDelete");
        dispatch(deleteAsync(Number(id!)));
        navigate("/speeches");
    };

    const onDownload = () => {
        // const fileUrl = audio?.url;
        // const link = document.createElement('a');
        // link.href = fileUrl!;
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);

        const fileUrl = audio?.url;
        window.open(fileUrl, '_blank');
    };


    const updateName = async (newName: any) => {
        try {
            // await BoardService.updateName(id!, newName);
            // setName(newName);

            const requestOptions: RequestInit = {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: newName,
                }),
            };

            const response = await fetch(
                `/api/v1/audios/${id}`,
                requestOptions
            );
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Failed to update list name");
            }

        } catch (error: any) {
            console.log('Update failed:', error.message);
        }
    };

    return (
        <div className="bg-white h-screen w-full flex">
            <LeftSidebar></LeftSidebar>
            <div className="w-full flex flex-col">
                <div className="bg-gray-100 h-16 px-4 py-1 flex items-center justify-center">
                    <div className="w-full flex flex-col items-center justify-center">
                        <h1 className="text-xl px-2 focus:bg-white hover:bg-purple-200 rounded focus:shadow-outline appearance-none" contentEditable
                            onBlur={(e) => updateName(e.target.innerText)}>
                            {audio?.title}
                        </h1>
                        <p className="text-gray-700">{formattedDate}</p>
                    </div>
                    <DropdownMenu onDelete={onDelete} onDownload={onDownload} />
                </div>
                <div className="flex justify-between items-start">
                    <div className="px-6 w-2/3 py-4 flex flex-col gap-4 items-center justify-center">
                        <div className="">
                            <ReactPlayer url={audio?.url} controls />
                        </div>
                        <div className="bg-gray-200 w-full p-5 rounded-2xl">
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet ac velit et posuere. Nullam in euismod leo, a efficitur nunc. Suspendisse in pulvinar lectus. Duis ultrices nulla at consectetur imperdiet. Nunc fermentum elit sit amet tellus tincidunt fermentum. Suspendisse potenti. Nulla convallis sed libero vel cursus. Suspendisse tincidunt ante ut ligula fermentum bibendum. Quisque sed ante ut lorem laoreet luctus sit amet sed mauris. Proin imperdiet vel ex non lacinia.
                                Fusce eu consectetur quam. Nam nec feugiat mi. Ut tincidunt efficitur erat, in consequat nulla finibus id. Aliquam erat volutpat. Aenean cursus arcu elit, nec ornare neque sollicitudin quis. Ut tempus nunc vitae nisl placerat, lobortis vehicula tortor suscipit. Mauris tincidunt viverra odio, et pellentesque ante feugiat et. Maecenas blandit augue non auctor accumsan. Donec venenatis blandit quam, et laoreet tellus pharetra nec. Quisque pharetra molestie enim vel scelerisque. Curabitur sollicitudin ut nunc sed aliquet. Pellentesque leo urna, mattis non lectus a, pellentesque suscipit elit. Fusce finibus vitae erat ultrices pharetra.</p> */}
                            <p>{audio?.text}</p>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <RightSidebar></RightSidebar>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpeechPage;
