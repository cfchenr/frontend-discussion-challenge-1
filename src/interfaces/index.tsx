export interface PostI {
    userName: string,
    userProfileImgUrl: string,
    comment: string,
    validated: boolean,
    postedOn: Date,
    id: number
}

export interface DataI {
    page: number,
    per_page: number,
    prev_page?: number,
    next_page?:  number,
    total: number,
    total_pages: number,
    posts: PostI[]
}