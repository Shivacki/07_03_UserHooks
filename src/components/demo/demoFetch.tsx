import { useFetch } from '../../hooks/useFetch';
import { PostDto, PostsDto } from '../../dto/jspDto'


export function DemoFetch() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
  
  return (
    <div>
      <div>
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка. Текст ошибки: ' + error}
      {data && !isLoading && !error && (data as PostsDto).map((item: PostDto) => <div key={item.id}>{item.title}</div>) }
    </div>
  );
}

