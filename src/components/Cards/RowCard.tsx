
export const RowCard = (data: RowCardData) => {

    return (
        <div
            className='flex flex-col md:flex-row md:items-center uppercase bg-light-gray text-mid-gray md:divide-x-2 divide-y-2 md:divide-y-0 border border-mid-gray'>
            {data.rows.map((row, index) => (
                <div
                    key={index}
                    className={`flex items-center justify-between p-2 md:p-4 w-full md:w-auto ${'flex-' + row.flex}`}>
                    <div className='flex items-center text-secondary'>
                        {row.icon && <row.icon className='text-3xl mr-2 shrink-0' />}
                        <h2 className="text-sm md:text-base">{row.title}</h2>
                    </div>
                    <h2 className='text-2xl md:text-4xl text-main font-heading font-bold font-var-heading-500 ml-4'>{row.value}</h2>
                </div>
            ))}

        </div>
    );
}