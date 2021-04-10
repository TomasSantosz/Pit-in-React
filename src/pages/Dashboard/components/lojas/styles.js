import styled from 'styled-components';

export const Content = styled.div` 
  display: flex;
  width: 100%;
  height: 90px;
  border: 1px solid rgba(198, 198, 198, 0.5);
  border-radius: 15px;

  margin-bottom: 20px;
  padding: 10px;  

  hr{
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid rgba(198, 198, 198, 0.2);
  }
  p{
    font-weight: 500;
    font-size: 15px;
  }
`;

export const ImagemShop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  
  width: 20%;
  height: 100%;
  border: 1px solid rgba(198, 198, 198, 0.3);

  img{
    width: 70%;
  }
  
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;