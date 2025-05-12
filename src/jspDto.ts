// Описатель DTO для https://jsonplaceholder.typicode.com/


export type PostDto = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostsDto = PostDto[];

