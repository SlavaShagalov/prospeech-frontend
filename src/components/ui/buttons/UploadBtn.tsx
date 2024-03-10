import React from 'react';

const UploadBtn: React.FC<{
    className?: string;
    onClick?: any;
    children?: any;
    [key: string]: any;
}> = ({
    className,
    onClick,
    children,
    ...props
}) => {
        return (
            <button
                className={`bg-gradient-to-br from-blue-300 to-purple-600 hover:from-blue-500 hover:to-purple-800 
                            px-4 py-2 rounded-xl 
                            cursor-pointer 
                            focus:outline-none focus:shadow-outline 
                            ${className}`}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        );
    }

export default UploadBtn;
