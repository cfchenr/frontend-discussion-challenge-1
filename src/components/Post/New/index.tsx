import Panel from '../../Panel'
import {
  Container,
  Row,
  Column,
  PostIcon
} from '../styles'
import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export interface Props {
    userName: string,
    userProfileImgUrl: string,
    newPost: (userName: string, userProfileImgUrl: string, comment: string, validated: boolean) => void
}

const New = ({userName, userProfileImgUrl, newPost}: Props) => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
        <Avatar alt={userName} src={userProfileImgUrl} sx={{marginRight: "8px"}}/>
          <Column>
            <h3>{userName}</h3>
          </Column>
        </Row>
        <Row className="comment">
          <Column>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    focused
                    variant="filled"
                    id="outlined-multiline-static"
                    label="Comment"
                    multiline
                    rows={4}
                    />
            </Box>
          </Column>
        </Row>

        <Row className="actions">
          <div className="buttons">
            <div className="left">
                <button onClick={() => {
                    newPost(userName, userProfileImgUrl, "some text", true)
                }}>
                  <PostIcon />
                </button>
            </div>
          </div>
        </Row>
      </Container>
    </Panel>
  )
}

export default New