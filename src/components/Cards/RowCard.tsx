
export const RowCard = (data: RowCardData) => {

    return (
        <div
            className='flex items-center uppercase bg-light-gray text-mid-gray divide-x-2 border border-mid-gray'>
            {data.rows.map((row, index) => (
                <div
                    key={index}
                    className={`flex items-center justify-between p-2 ${'flex-' + row.flex}`}>
                    <div className='flex items-center text-secondary'>
                        {row.icon && <row.icon className='text-3xl mr-2' />}
                        <h2>{row.title}</h2>
                    </div>
                    <h2 className='text-4xl text-main font-heading font-bold font-var-heading-500'>{row.value}</h2>
                </div>
            ))}

        </div>
    );
}