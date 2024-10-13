import React from 'react';
import { Target, Bomb, SquareArrowRight, Weight } from 'lucide-react';

// Legend component
const Legend: React.FC = () => {
  return (
    <section className='bg-white shadow-md'>
      <div className='container mx-auto flex flex-wrap justify-center items-center gap-4 py-5'>
        <LegendItem
          icon={<SquareArrowRight className='text-green-600' />}
          label='Start Node'
        />
        <LegendItem
          icon={<Target className='text-red-600' />}
          label='Target Node'
        />
        <LegendItem
          icon={<Bomb className='text-gray-600' />}
          label='Bomb Node'
        />
        <LegendItem
          icon={<Weight className='text-gray-600' />}
          label='Weight Node'
        />
        <LegendItem
          icon={<Square className='bg-white border border-gray-300' />}
          label='Unvisited Node'
        />
        <LegendItem icon={<VisitedNodes />} label='Visited Nodes' />
        <LegendItem
          icon={<Square className='bg-yellow-400' />}
          label='Shortest Path Node'
        />
        <LegendItem icon={<Square className='bg-black' />} label='Wall Node' />
      </div>
    </section>
  );
};

// Define props for LegendItem
interface LegendItemProps {
  icon: React.ReactNode;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ icon, label }) => (
  <div className='flex items-center space-x-2'>
    {icon}
    <span className='text-sm'>{label}</span>
  </div>
);

// Define props for Square
interface SquareProps {
  className: string;
}

const Square: React.FC<SquareProps> = ({ className }) => (
  <div className={`w-6 h-6 ${className}`}></div>
);

// VisitedNodes component
const VisitedNodes: React.FC = () => (
  <div className='flex'>
    <Square className='bg-blue-500 mr-1' />
    <Square className='bg-purple-500' />
  </div>
);

export default Legend;
