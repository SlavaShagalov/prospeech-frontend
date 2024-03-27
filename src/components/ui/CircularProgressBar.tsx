import React, { useEffect, useState } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressBarProps {
    totalTime: number; // milliseconds
    onComplete: () => void; // on timer finished
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
    totalTime,
    onComplete,
}) => {
    const [progress, setProgress] = useState(100); // Начальное значение прогресса 100%

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                // Рассчитываем новый прогресс
                const elapsedTime = totalTime - prevProgress / 100 * totalTime + 1000; // Прошедшее время
                const remainingTime = totalTime - elapsedTime; // Оставшееся время
                const newProgress = (remainingTime / totalTime) * 100; // Прогресс в процентах
                return newProgress;
            });
        }, 1000); // Обновляем прогресс каждую секунду

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, [totalTime]);

    useEffect(() => {
        if (progress <= 0) {
            //   clearInterval(interval); // Очищаем интервал при достижении 0%
            onComplete(); // Вызываем колбэк по завершении таймера
            setProgress(100);
        }
    }, [progress]);

    return (
        <CircularProgressbar value={progress} text={`0:0${Math.round(progress / 100 * totalTime / 1000)}`}
            styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                // rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt',

                // Text size
                textSize: '16px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 1,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgb(125, 10, 154)`,
                textColor: 'rgb(125, 10, 154)',
                trailColor: '#d6d6d6',
                // backgroundColor: '#FF0000',
            })} />
    );
};

// 0:0{Math.round(progress / 100 * totalTime / 1000)}

export default CircularProgressBar;
