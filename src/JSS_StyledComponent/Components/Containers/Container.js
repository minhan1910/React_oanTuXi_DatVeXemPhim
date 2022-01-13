import styled from 'styled-components';

//Lấy thông số container trong bs4
export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    border: 3px solid ${props => props.theme.borderColor};
`;