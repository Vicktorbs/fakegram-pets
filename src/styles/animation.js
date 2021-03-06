import { css, keyframes} from "styled-components";

const fadeInKeyfram = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
    css`animation: ${ time } ${fadeInKeyfram} ${ type };`

    const scaleDown = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.5);
    }
`;

export const scale = ({time='1s', type='ease'} = {})=> css `
    animation: ${time} ${scaleDown} ${type};
`;