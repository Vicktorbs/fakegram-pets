import { Link as LinkRoute } from "react-router-dom";
import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Link = styled(LinkRoute)`
    width: 100%;
`

export const Article = styled.article`
    min-height: 200px;
`

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`

export const Img = styled.img`
    ${ fadeIn() }
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`

export const ImgLoading = styled.div`
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    border-radius: 10px;
    height: 250px;
    object-fit: cover;
    background-color: #e7e7de;
    top: 0;
    width: 100%;
`

export const ButtonLoading = styled.button`
    margin-top: 10px;
    padding-top: 8px;
    display: flex;
    align-items: center;
    background-color: #e7e7de;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`