import Post from '../post/Post'
import './posts.scss'
import { useQuery} from '@tanstack/react-query'
import { makeRequest } from '../../axios'

const Posts = ({userId}) => {

  console.log(userId)

  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => makeRequest.get("/posts?userId="+userId).then((res) => {
      return res.data;
    })
  });



  return (
    <div className='posts'>
      {error
        ? "Something went wrong!"
        : isLoading 
        ? "loading" 
        : data && data.length > 0 && data.map((post) => <Post post={post} key={post.id} />
        )}
    </div>
  )
}

export default Posts