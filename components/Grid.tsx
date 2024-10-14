'use client';

import { usePathFinding } from '@/hooks/usePathfinding';
import { MAX_COLS, MAX_ROWS } from '@/util/constants';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Grid: React.FC = () => {
  const { grid } = usePathFinding();
  return (
    <div
      className={twMerge(
        //Base classes
        'flex items-center flex-col justify-center border-sky-300',
        //Grid Height Controls
        `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${
          MAX_ROWS * 15
        }px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
        //Grid Width Controls
        `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${
          MAX_COLS * 8
        }px] w-[${MAX_COLS * 7}px]`
      )}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className='flex'>
          {row.map((tile, tileIndex) => (
            <div className='bg-white h-2 w-2 border'></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
