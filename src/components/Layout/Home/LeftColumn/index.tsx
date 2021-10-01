import { Virtuoso } from 'react-virtuoso'

import Post from "../../../Post"
import { PostI } from '../../../../interfaces'

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from './styles'

export interface Props {
  validated: boolean,
  handleChange: () => void
  loading: boolean,
  posts: PostI[],
  loadMore: () => void
}

const Posts = ({validated, handleChange, loading, posts, loadMore}: Props) => {
  return (
    <Container className="left-column">
      <FormGroup>
        <FormControlLabel control={<Switch 
          checked = {validated}
          onChange = {handleChange}
          inputProps = {{ 'aria-label': 'Show only validated comments' }}
        />}
        label = "Show only validated comments" />
      </FormGroup>
      {loading ? <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box> : <Virtuoso
        useWindowScroll
        initialTopMostItemIndex={validated ? 0 : (Number(window.localStorage.getItem('discussion-challenge-page'))-1)*20}
        data={posts}
        endReached={loadMore}
        overscan={20}
        itemContent={(index, post) => { 
          return (
            <Post
              userName={post.userName}
              userProfileImgUrl={post.userProfileImgUrl}
              comment={post.comment}
            />
          )
        }}
      />}
    </Container>
  );
}

export default Posts