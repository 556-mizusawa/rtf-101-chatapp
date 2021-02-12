import { Dispatch } from 'react';

export interface MessageProps {
  inputEl?: any;
  name: string;
  setText: Dispatch<string>;
  text: string;
}
export interface MessageObjects {
  isLastItem: boolean;
  key: string;
  name: string;
  text: string;
}
