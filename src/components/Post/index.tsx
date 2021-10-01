import Panel from '../Panel'
import {
  Container,
  Row,
  Column,
  LikeIconLess
} from './styles'
import Avatar from '@mui/material/Avatar';


export interface Props {
    userName: string,
    userProfileImgUrl: string,
    comment: string
}

const Post = ({userName, userProfileImgUrl, comment}: Props) => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
        <Avatar alt={userName} src={userProfileImgUrl} sx={{marginRight: "8px"}}/>
          <Column>
            <h3>{userName}</h3>
            <time>to be defined</time>
          </Column>
        </Row>
        <Row className="description">
          <Column>
                <>
                <span className="title">Description</span>
                    <p>{comment}</p>
                <div className="separator"></div>
              </>
          </Column>
        </Row>

        <Row className="actions">
          <div className="buttons">
            <div className="left">
                <button>
                  <LikeIconLess />
                </button>
            </div>
          </div>
        </Row>
      </Container>
    </Panel>
  )
}

export default Post