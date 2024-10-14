import { END_TILE_CONFIG, START_TILE_CONFIG } from '@/lib/constants';
import { AlgorithmType, GridType, MazeType } from '@/lib/types';
import { createGrid } from '@/lib/utils';
import { createContext, ReactNode, use, useState } from 'react';

interface PathFindingContextInterface {
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  maze: MazeType;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathfindingContext = createContext<
  PathFindingContextInterface | undefined
>(undefined);

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>('BFS');
  const [maze, setMaze] = useState<MazeType>('NONE');
  const [grid, setGrid] = useState<GridType>(
    createGrid(START_TILE_CONFIG, END_TILE_CONFIG)
  );
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </PathfindingContext.Provider>
  );
};
