import React from 'react';
import { Article, Img, ImgWrapper, Link } from './styles';
import { useNearScree } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';
// import { Link } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, liked, likes = 0, src=DEFAULT_IMAGE }) => {

    const [show, element] = useNearScree()
    // const key = `like-${id}`
    // const [liked, setLiked] = useLocalStorage(key, false)

    const handleFavClick = () => setLiked(!liked)

    return (
        <Article ref={element}>
            {
                show && <>
                    <Link to={`/detail/${id}`} >
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>

                <ToggleLikeMutation>
                    {
                        (toggleLike) => {
                            const handleFavClick = () => {
                                toggleLike({ variables: {
                                    input: { id }
                                } })
                            }
                            return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                        }
                    }
                </ToggleLikeMutation>
                </>
            }
        </Article>
    )
}