export interface IData {
  id: number;
  title: string;
}

export const mockData: IData[] = [
  { id: 1, title: "Max" },
  { id: 2, title: "Alex" },
  { id: 3, title: "Ben" },
];

export const getData = (index: number): Promise<IData | null> =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(mockData.find((i) => i.id === index) || null),
      Math.floor(Math.random() * 5000)
    )
  );
