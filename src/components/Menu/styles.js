import styled from 'styled-components';


export const Header = styled.div`
  display: flex;
  align-content: center; 
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #c6c6c6; 
  width: 100vw;
  height: 10%;
  background-color: rgb(253, 47, 37); 

`;

export const IconsMenu = styled.div`
  a{
    display: flex; 
    align-items: center;
    flex-direction: column;
    text-decoration: none;

    .active{
      font-size: 18px;
    }
    p{
      margin-top: 1px;
      font-size: 15px;
      color: white;
    }
  }
  
`;