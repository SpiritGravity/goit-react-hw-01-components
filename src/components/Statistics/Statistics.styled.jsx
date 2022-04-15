import styled from 'styled-components';

export const Section = styled.section`
    margin-top: 30px;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
`;

export const StatList = styled.ul`
    display: flex;
    padding: 0;
    margin-top: 15px;
`;

export const StatItem = styled.li`
    list-style: none;
    width: 50px;
    height: 50px;
    border: 1px solid #ffffff;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    align-items: center;
    background-color: ${({ name }) => { 
    switch (name) { 
        case ".docx":
            return "#81DCFD";
        case ".pdf":
            return "#8C89E5";
        case ".mp3":
            return "#FC77F3";
        case ".psd":
            return "#64D591";
        default:
            return "#908DDF";
    }
    }};
`;

export const StatLabel = styled.span`
    margin: 0;
    padding: 0;
    display: block;
    font-weight: bold;
    line-height: 1.4;
    font-size: 14px;
`;

export const StatData = styled.span`
    margin: 0;
    padding: 0;
    font-weight: bold;
    line-height: 1.4;
    font-size: 20px;
`;

