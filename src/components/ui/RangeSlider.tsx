import { useState } from "react";

const RangeSlider: React.FC<{ min: number; max: number; onChange: (value: number) => void }> = ({ min, max, onChange }) => {
    const [value, setValue] = useState(5);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            className="w-full"
        />
    );
};

export default RangeSlider;
