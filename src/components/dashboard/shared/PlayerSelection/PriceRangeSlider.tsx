'use client';
import { Range, getTrackBackground } from 'react-range';

type PriceRangeSliderProps = {
    range: number[]
    handleRange:  any,
}
export const PriceRangeSlider = ({ range, handleRange }: PriceRangeSliderProps) => {

    const MIN = 4;
    const MAX = 15;

    return (
        <div>
            <p className='mb-4'>Price Range</p>
            <Range
                values={range}
                step={.5}
                min={MIN}
                max={MAX}
                onChange={handleRange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="h-2 w-full rounded-full"
                        style={{
                            ...props.style,
                            background: getTrackBackground({
                                values: range,
                                colors: ['#ccc', '#FF4B44', '#ccc'], // main color in center
                                min: MIN,
                                max: MAX,
                            }),
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props, index }) => (
                    <div
                        {...props}
                        className="w-6 h-6 rounded-full bg-main flex items-center justify-center text-xs font-bold text-white shadow"
                    >
                        {range[index]}
                    </div>
                )}
            />


        </div>


    );
};
