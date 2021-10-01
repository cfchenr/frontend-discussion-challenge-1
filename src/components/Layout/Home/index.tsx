import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import { Container } from './styles'
import { PostI } from '../../../interfaces'


export interface Props {
  validated: boolean,
  handleChange: () => void
  loading: boolean,
  posts: PostI[],
  loadMore: () => void
  newPost: (userName: string, userProfileImgUrl: string, comment: string, validated: boolean) => void
}

const HomeLayout = ({validated, handleChange, loading, posts, loadMore, newPost}: Props) => {
  return (
    <Container>
      <main>
        <LeftColumn validated={validated} handleChange={handleChange} loading={loading} posts={posts} loadMore={loadMore}/>
        <RightColumn newPost={newPost}/>
      </main>
    </Container>
  )
}

export default HomeLayout