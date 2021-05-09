import styled from 'styled-components';

export const Content = styled.div`   
  display: flex;
  width: 100%;    
`;

export const Itens = styled.div`   
  margin-right: 20px;
  min-width:76px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto; 

  ::-webkit-scrollbar {
    display: none;
  }    

  img{
    width:100%;
  }

  
`;