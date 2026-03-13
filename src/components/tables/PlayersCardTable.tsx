'use client';
import Link from 'next/link';
import { FaArrowCircleRight } from "react-icons/fa";

export const PlayersCardTable = ({title,topStats,link}:PlayerCardTableData) => {
    if(topStats.length==0) return null;
    const top= topStats[0];
    return (
        <div className="bg-white rounded-xl shadow-md min-w-xs max-w-sm border border-gray-200 uppercase">
            <div className='grid grid-cols-2 p-4'>

                <div className='space-y-3 items-center text-gray-300 uppercase'>
                    <div className=''>
                        <h2 className='text-7xl text-dark-third font-heading font-bold font-var-heading-500'>{top.stat}</h2>
                        <p className='text-xs font-bold text-secondary'>{title}</p>
                    </div>
                    <div className=''>
                        <p className='text-sm font-bold text-dark-third m-0'>1º</p>
                        <h2 className='font-var-heading-wg text-secondary font-heading text-3xl leading-[.8]'>{top.player.name}</h2>
                    </div>
                    <div className='flex items-center'>
                        <img
                            className=""
                            src={top.player.team?.logoSrc}
                            width={25}
                            height={25}
                            alt={""}
                        />
                        <p className='pl-2 text-xs font-bold text-secondary leading-none'>{top.player.team?.name}</p>
                    </div>
                </div>
                <div className=' '>
                    <div className='flex items-center justify-end h-full'>
                        <img
                            className=""
                            src={top.player.imageSrc}
                            alt={top.player.name}
                            width={134}
                            height={134}
                        />
                    </div>

                </div>
            </div>


            <div className="">
                {topStats.map((row, index) => (
                    <div
                        key={row.player.id}
                        className={`flex justify-between items-center text-sm py-[.5rem] px-4 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                            }`}
                    >
                        <div className="flex items-center gap-6 h-full">
                            <span className="font-bold text-gray-500 text-xs">
                                {String(index+1).padStart(2, '0')}
                            </span>
                            <img
                                src={row.player.team?.logoSrc}
                                width={25}
                                height={25}
                                alt=""
                            />
                            <span className="text-xs">{row.player.name}</span>
                        </div>
                        <div className="font-bold">{row.stat}</div>
                    </div>
                ))}

            </div>

            <div className="text-center mt-6 py-6">
                <Link
                    href={link}
                    className="inline-flex items-center text-main font-bold text-sm hover:underline"
                >
                    <span className='items-center uppercase'>ALL LEADERS IN {title}</span>
                    
                    <FaArrowCircleRight className='ml-2' />

                </Link>
            </div>
        </div>
    );
};
