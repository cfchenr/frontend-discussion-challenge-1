import HomeLayout from "../../components/Layout/Home";

import { useCallback, useEffect, useState } from "react";

import api from "../../services/api"
import { PostI, DataI } from "../../interfaces"


const Home = () => {
    const [loading, setLoading] = useState<boolean>(true) // prevent double loading
  const [morePages, setMorePages] = useState({
    validated: true,
    notValidated: true
  }) // have more pages
  const [page, setPage] = useState<number>(1) // current page
  const [posts, setPosts] = useState<PostI[]>([]) // set of posts
  const [validated, setValidated] = useState<boolean>(false) // show only validated posts

  const loadInit = useCallback(() => {
    return setTimeout(async () => {
      var latestPage = validated ? 1 : Number(window.localStorage.getItem('discussion-challenge-page'))
      for (var i = 1; i <= latestPage; i++) {
        const url = getUrl(i)
        await api.get<DataI>(url).then(response => {
          setPosts((posts: PostI[]) => ([...posts, ...response.data.posts]))
        })
      }
      setPage(latestPage)
      setLoading(false)
    }, 200)
  }, [validated])

  const loadMore = useCallback(() => {
    return setTimeout(async () => {
      if(((morePages.validated && validated) || (morePages.notValidated && !validated)) && !loading) {
        const loadPage = page + 1
        const url = getUrl(loadPage)
        await api.get<DataI>(url).then(response => {
          setPosts((posts: PostI[]) => ([...posts, ...response.data.posts]))
          setPage(Number(response.data.page))
          const latestPage = Number(window.localStorage.getItem('discussion-challenge-page'))
          if (loadPage > latestPage) {
            window.localStorage.setItem('discussion-challenge-page', loadPage.toString())
          }
          if (response.data.next_page === null) {
            validated ? setMorePages((morePages: {
              validated: boolean,
              notValidated: boolean
            }) => ({
              ...morePages,
              validated: false
            })) : setMorePages((morePages: {
              validated: boolean,
              notValidated: boolean
            }) => ({
              ...morePages,
              notValidated: false
            }))
          }
        })
      }
    }, 200)
  }, [loading, morePages, page, validated])

  const getUrl = (loadPage: number): string => {
    var url = "/posts?"
    url += loadPage > 1 ? ("page=" + loadPage) : ""
    url += validated ? "&filter=validated" : ""

    return url
  }

  const handleChange = () => {
    setLoading(true)
    setPosts([])
    setValidated(!validated)
  }

  const newPost = (userName: string, userProfileImgUrl: string, comment: string, validated: boolean) => {
    const data = {
      userName: userName,
      userProfileImgUrl: userProfileImgUrl,
      comment: comment,
      validated: validated
    }
    
    api.post("/posts", data)
  }

  useEffect(() => {
    const lastPage = Math.max(Number(window.localStorage.getItem('discussion-challenge-page')), 1)
    window.localStorage.setItem('discussion-challenge-page', lastPage.toString())
    const timeout = loadInit()
    return () => clearTimeout(timeout)
  }, [validated, loadInit])

    return (
        <HomeLayout validated={validated} handleChange={handleChange} loading={loading} posts={posts} loadMore={loadMore} newPost={newPost}/>
    )
  }
  
  export default Home