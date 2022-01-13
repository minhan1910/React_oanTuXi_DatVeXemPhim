import styled from 'styled-components';

//viết như css ko phải viết như js
//có thể thay đổi thông qua backend hoặc redux , FE
//cho người dùng chọn dark theme, ...
//cái này là chuỗi nên nó có thể dùng dynamic được
export const Button = styled.button`
    color: #fff;
    background: ${props => props.bgPrimary ? 'linear-gradient(#f74c0b, #ec4736)' : 'red'};
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: ${props => props.fontSize2x ? '2rem' : '1rem'};
    padding: 1rem;
    // opacity: 1;
        &:hover {
            opacity: 0.7;
            transition: all 0.5s;
        }
`;

//có thể truyền props nó động tiện hơn css

//Này nó kế thừa lại các thuộc tính và override lại vài cái thuộc tính của nó
//Extending syled
export const SmallButton = styled(Button)`
    background-color: orange;
    font-size: 0.5rem;
`;






