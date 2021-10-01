import { Container } from './styles'
import NewPost from "../../../Post/New"

export interface Props {
    newPost: (userName: string, userProfileImgUrl: string, comment: string, validated: boolean) => void
}

const RightColumn = ({newPost}: Props) => {
    return(
        <Container className="right-column">
            <NewPost userName="Cláudio Henriques" userProfileImgUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" newPost={newPost}/>
        </Container>
    )
}

export default RightColumn