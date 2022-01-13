import styled from 'styled-components';

//styling props scss
//truyền mặc định props nếu ko có thì dùng cái còn lại
export const TextField = styled.input`
    color: ${props => props.inputColor || 'red'};
`;