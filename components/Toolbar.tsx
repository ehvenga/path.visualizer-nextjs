'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

// Define the type for the props
interface ToolbarProps {
  onVisualize: () => void;
  onClearBoard: () => void;
  onChangeAlgorithm: (algorithm: string) => void;
  onChangeSpeed: (speed: string) => void;
  onChangeMaze: (maze: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onVisualize,
  onClearBoard,
  onChangeAlgorithm,
  onChangeSpeed,
  onChangeMaze,
}) => {
  return (
    <nav className='bg-blue-950 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          href='/'
          className='text-xl font-bold text-green-600 hover:text-green-500'
        >
          Pathfinding Visualizer
        </Link>

        <div className='flex space-x-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className='text-white hover:text-blue-950 hover:bg-white transition-colors duration-200'
              >
                Algorithms <ChevronDown className='ml-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='animate-in slide-in-from-top-2 duration-200'>
              <DropdownMenuItem onSelect={() => onChangeAlgorithm('dijkstra')}>
                Dijkstra's
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onChangeAlgorithm('astar')}>
                A*
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onChangeAlgorithm('bfs')}>
                BFS
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onChangeAlgorithm('dfs')}>
                DFS
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => onChangeAlgorithm('greedyBestFirst')}
              >
                Greedy Best-First Search
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => onChangeAlgorithm('bidirectional')}
              >
                Bidirectional Search
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => onChangeAlgorithm('bellmanFord')}
              >
                Bellman-Ford
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => onChangeAlgorithm('floydWarshall')}
              >
                Floyd-Warshall
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => onChangeAlgorithm('jumpPointSearch')}
              >
                Jump Point Search
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className='text-white hover:text-blue-950 hover:bg-white transition-colors duration-200'
              >
                Mazes & Patterns <ChevronDown className='ml-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='animate-in slide-in-from-top-2 duration-200'>
              <DropdownMenuItem
                onSelect={() => onChangeMaze('recursiveDivision')}
              >
                Recursive Division
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => onChangeMaze('recursiveDivisionVertical')}
              >
                Recursive Division (vertical skew)
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => onChangeMaze('recursiveDivisionHorizontal')}
              >
                Recursive Division (horizontal skew)
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onChangeMaze('randomMaze')}>
                Basic Random Maze
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onChangeMaze('weightMaze')}>
                Basic Weight Maze
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onChangeMaze('stairPattern')}>
                Simple Stair Pattern
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant='ghost'
            className='bg-green-700 text-white hover:text-white hover:bg-green-800 transition-colors duration-200'
            onClick={onVisualize}
          >
            Visualize Algorithm
          </Button>

          <Button
            variant='ghost'
            className='text-green-500 hover:text-white bg-blue-950 hover:bg-red-900 transition-colors duration-200'
            onClick={onClearBoard}
          >
            Clear Board
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className='text-white hover:text-blue-950 hover:bg-white transition-colors duration-200'
              >
                Speed <ChevronDown className='ml-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='animate-in slide-in-from-top-2 duration-200'>
              <DropdownMenuItem onSelect={() => onChangeSpeed('slow')}>
                Slow
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onChangeSpeed('medium')}>
                Medium
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onChangeSpeed('fast')}>
                Fast
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
