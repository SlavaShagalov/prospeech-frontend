import React, { useState } from 'react';

const DropdownMenu: React.FC<{
    onDelete: any,
    onDownload: any
}> = ({ onDelete, onDownload }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-full border border-gray-300 bg-white px-1 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    onClick={toggleMenu}
                >
                    <img src="/assets/more_vert_black.svg" alt="Options" />
                </button>
            </div>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <button
                            onClick={onDelete}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                            Удалить
                        </button>
                        <button
                            onClick={onDownload}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                            Скачать
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
