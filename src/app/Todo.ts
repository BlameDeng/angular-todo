export class Todo {
  constructor(
    public id: number,
    public content: string,
    public createdAt: Date,
    public done: boolean
  ) {}
}
