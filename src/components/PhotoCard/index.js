import React, { useEffect, useRef, useState } from 'react';
import { Article, Button, Img, ImgWrapper } from './styles';
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, likes = 0, src=DEFAULT_IMAGE }) => {

    const element = useRef(null);
    const [show, setShow] = useState(false)

    useEffect(function () {
        // console.log(element.current);
        Promise.resolve(
            typeof window.IntersectionObserver !== 'indefined'
                ? window.IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            const observer = new window.IntersectionObserver(function (entries) {
                // console.log(entries);
                const { isIntersecting } = entries[0]
                // console.log(isIntersecting);
                if (isIntersecting) {
                    // console.log('si');
                    setShow(true)
                    observer.disconnect()
                }
            })
            observer.observe(element.current)
        })
    }, [element])

    return (
        <Article ref={element}>
            {
                show && <>
                    <a href={`/detail/${id}`} >
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>

                    <Button>
                        <MdFavoriteBorder size='25px' />{ likes } likes!
                    </Button>
                </>
            }
        </Article>
    )
}