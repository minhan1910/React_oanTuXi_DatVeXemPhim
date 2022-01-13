import styled from 'styled-components';
import React from 'react';
//Styling any compnent 
// export const Link = (props) => {
//     return <a className={props.className}>
//         {props.children}
//     </a>
// }
//let {className, children} = props;

export const Link = ({className, children, ...resprops}) => (
    <a className={className} {...resprops}>
        {children}
    </a>
);


//Chỉ định nghĩa css thôi chứ truyềnc ác thẻ khác nó ko nhận còn tryuền vào Link thì nó nhận
export const StyledLink = styled(Link)`
    color:#fff !important;
    background-color: red;
    font-weight: bold;
`;




