'use client';

import { GrPrevious, GrNext } from "react-icons/gr";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import React, { useMemo, useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    ColumnDef,
    flexRender,
} from '@tanstack/react-table';

import { FaInfoCircle } from 'react-icons/fa';
import Image from 'next/image';
import { getPositionBgClass } from '@/utils/getPositionBgClass';
import { useDispatch } from "react-redux";





type PlayerSelectionTableProps = {
    items: FantasyPlayer[],
    itemsCount: number,
    pageNumber: number,
    pageSize: number,
    totalCount: number,
    totalPages: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean,
    handlePage: Function,
    handleOnPlayerSelect: Function
};

export const PlayerSelectionTable = ({
    items,
    itemsCount,
    pageNumber,
    pageSize,
    totalCount,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    handlePage,
    handleOnPlayerSelect
}: PlayerSelectionTableProps) => {

    const [sorting, setSorting] = useState([{ id: 'value', desc: true }]);
    const columns = useMemo<ColumnDef<FantasyPlayer>[]>(
        () => [
            {
                id: 'info',
                header: '',
                cell: ({ row }) => (
                    <div className="px-1">
                        <button type="button">
                            <FaInfoCircle className="text-gray-500 hover:text-main cursor-pointer" />
                        </button>
                    </div>
                ),
            },
            {
                accessorKey: 'shirtImg',
                header: 'PLAYER',
                cell: ({ row }) => {
                    const { position, team, name } = row.original;
                    return (
                        <div onClick={() => handleOnPlayerSelect(row.original)} className="cursor-pointer flex items-center gap-3">
                            <img src={team?.shirtImgSrc} alt="Shirt" width={30} height={30} />
                            <div>
                                <p className="font-bold text-base">{name}</p>
                                <div className="flex items-center gap-3">
                                    <div className={`text-white px-1 py-[2px] text-xs rounded-[2px] ${getPositionBgClass(position)}`}>
                                        {position}
                                    </div>
                                    <div className="text-xs bg-gray-400 px-1 py-[2px]  rounded-[2px] text-white">{team?.abbreviation}</div>
                                </div>
                            </div>
                        </div>
                    );
                },
            },
            {
                accessorKey: 'price',
                header: 'PRICE',
                cell: ({ getValue }) => (
                    <div className="text-sm font-heading font-bold font-var-heading-500">
                        {getValue<number>().toFixed(1)}
                    </div>
                ),
            },
            {
                accessorKey: 'value',
                header: '**',
                cell: ({ getValue }) => (
                    <div className="text-sm font-heading font-bold font-var-heading-500">
                        {/* {getValue<number>().toFixed(2)} */}
                    </div>
                ),
            },
        ],
        []
    );

    const table = useReactTable({
        data: items,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        pageCount: totalPages,
    });

    return (
        <div className="w-full bg-white rounded shadow">
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="py-2">
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="border-b border-mid-gray hover:bg-gray-50">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="py-2">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-sm p-1">
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => handlePage(1)}
                        disabled={!hasPreviousPage}
                        className="btn p-2 bg-secondary text-main font-bold rounded-full disabled:opacity-50"
                    >
                        <MdOutlineKeyboardDoubleArrowLeft className="text-xl" />
                    </button>
                    <button
                        onClick={() => handlePage(pageNumber - 1)}
                        disabled={!hasPreviousPage}
                        className="btn p-2 bg-secondary text-main font-bold rounded-full disabled:opacity-50"
                    >
                        <GrPrevious className="text-xl" />
                    </button>
                </div>

                <span>
                    Page {pageNumber} of {totalPages}
                </span>

                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => handlePage(pageNumber + 1)}
                        disabled={!hasNextPage}
                        className="btn p-2 bg-secondary text-main font-bold rounded-full disabled:opacity-50"
                    >
                        <GrNext className="text-xl" />
                    </button>
                    <button
                        onClick={() => handlePage(totalPages)}
                        disabled={!hasNextPage}
                        className="btn p-2 bg-secondary text-main font-bold rounded-full disabled:opacity-50"
                    >
                        <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};
