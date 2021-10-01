import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ShareOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';

export interface Props {
    userName: string,
    userProfileImgUrl: string,
    comment: string
}

const Post = ({userName, userProfileImgUrl, comment}: Props) => {
    return(
        <>
            <Card variant="outlined" sx={{ border: "none" }}>
                <CardHeader
                    avatar={
                    <Avatar alt={userName} src={userProfileImgUrl} />
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    sx={{ color: "#121640", fontWeight: "600", lineHeight: "1.5" }}
                    title={userName}
                />
                <CardContent sx={{ width: "90%", margin: "auto" }}>
                    <Typography variant="body2" color="text.secondary">
                        {comment}
                    </Typography>
                </CardContent>
                <CardActions sx={{ marginRight: '0px' }}>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Divider light sx={{ width: "95%", margin: "20px auto"}}/>
        </>
    )
}

export default Post