import { WordData } from '@/ts/interfaces';
import SetState from '@/ts/types';
import { createContext } from 'react';

interface WordItemProps {
  difficultWords: WordData[],
  learnedWords: WordData[],
  setDifficultWords: SetState<WordData[]>,
  setLearnedWords: SetState<WordData[]>,
}

const defaultValue = {
  difficultWords: [],
  learnedWords: [],
  setDifficultWords: () => { },
  setLearnedWords: () => { },
};

const WordItemContext = createContext<WordItemProps>(defaultValue);

export default WordItemContext;