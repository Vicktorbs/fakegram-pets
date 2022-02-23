import React from 'react';
import { Article, Img, ImgWrapper } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScree } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, likes = 0, src=DEFAULT_IMAGE }) => {

    const [show, element] = useNearScree()
    const key = `like-${id}`
    const [liked, setLiked] = useLocalStorage(key, false)

    const handleFavClick = () => setLiked(!liked)

    return (
        <Article ref={element}>
            {
                show && <>
                    <a href={`/?detail=${id}`} >
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>

                <ToggleLikeMutation>
                    {
                        (toggleLike) => {
                            const handleFavClick = () => {
                                !liked && toggleLike({ variables: {
                                    input: { id }
                                } })

                                setLiked(!liked)
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