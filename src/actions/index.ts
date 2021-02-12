import { Dispatch } from 'react';

export interface MessageProps {
  name: string;
  setText: Dispatch<string>;
  text: string;
}
