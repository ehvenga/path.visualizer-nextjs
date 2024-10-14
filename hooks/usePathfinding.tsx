import { PathfindingContext } from '@/context/PathfindingContext';
import { useContext } from 'react';

export const usePathFinding = () => {
  const context = useContext(PathfindingContext);

  if (!context) {
    throw new Error('usePathfinding must be within a PathfindingProvider');
  }

  return context;
};
