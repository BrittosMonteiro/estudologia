export interface INotebook {
  id: string;
  questions: IQuestion[];
  status: boolean;
  title: string;
}

export interface IQuestion {
  id?: string;
  title: string;
  answer: string;
}
