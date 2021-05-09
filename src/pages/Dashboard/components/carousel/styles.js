import styled from 'styled-components';

export const Content = styled.div` 
  display: flex;
  margin-bottom: 40px;
`;
export const Carrousel = styled.div`
  display: flex;
  
  overflow: auto; 

  ::-webkit-scrollbar {
    display: none;
  }  

  img{
    width: 70%;
    border-radius: 10px;
    margin-right: 10px;
  }
`;