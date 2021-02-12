import { Dispatch } from 'react';

export interface MessageProps {
  inputEl?: any;
  name: string;
  setText: Dispatch<string>;
  text: string;
}
export interface MessageObjects {
  key: string;
  name: string;
  text: string;
}
