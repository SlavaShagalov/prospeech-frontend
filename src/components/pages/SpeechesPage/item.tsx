import Audio from "../../../models/Audio";

interface CardProps {
    audios: Audio[] | undefined,
  }

const Item: React.FC<CardProps> = ({audios}) => {
    const handleAudioClick = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <ul className="divide-y divide-gray-200">
            {audios?.map((audio) => (
                <li key={audio.id} className="py-4">
                    <button
                        onClick={() => handleAudioClick(audio.url)}
                        className="text-blue-500 hover:text-blue-700 font-semibold"
                    >
                        {audio.title}
                    </button>
                    <a href={audio.url}>Ссылка {audio.title}</a>
                </li>
            ))}
        </ul>
    );
}

export default Item;
