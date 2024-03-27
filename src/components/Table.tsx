import React from "react";

import { useNavigate } from "react-router-dom";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'


import Audio from "./../models/Audio";
import { padZeros } from "../utils/format";

const months = [
    "янв.",
    "фев.",
    "мар.",
    "апр.",
    "май.",
    "июн.",
    "июл.",
    "авг.",
    "сен.",
    "окт.",
    "ноя.",
    "дек.",
];

const columnHelper = createColumnHelper<Audio>()

const columns = [
    columnHelper.accessor("title", {
        header: () => "Название",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor("created_at", {
        header: () => "Создан",
        cell: info => {
            let date = new Date(info.getValue());
            const day = date.getDate();
            const monthIndex = date.getMonth();
            const monthName = months[monthIndex];
            const hours = padZeros(date.getHours());
            const minutes = padZeros(date.getMinutes());
            const formattedDate = `${day} ${monthName} ${hours}:${minutes}`;
            return formattedDate;
        },
    }),
]

interface AudioProps {
    data: Audio[],
    // columns: ColumnDef<Audio>[];
}

const Table: React.FC<AudioProps> = ({
    data,
    // columns
}) => {
    const table = useReactTable<Audio>({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    })

    const navigate = useNavigate();

    return (
        <table>
            <thead className="h-10">
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id} className="text-left">
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className="border pl-2 pr-9">
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                {/* <div className="bg-red-400 w-7 h-8 inline-block"></div> */}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id} className="h-16 hover:bg-violet-200 cursor-pointer"
                        onClick={() => navigate(`/speeches/${row.original.id}`)}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className="border pl-2 pr-9">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
