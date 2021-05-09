import React from 'react';
import { Content, Carrousel } from './styles';

function Shops(){
  return(
    <>
      <Content>
        <Carrousel>
          <img src={"https://static-images.ifood.com.br/image/upload/t_high/discoveries/53d43aea-1e16-45d2-98d8-baab21bd57db.png"} alt="Logo Padoca" />
          <img src={"https://static-images.ifood.com.br/image/upload/t_high/discoveries/53d43aea-1e16-45d2-98d8-baab21bd57db.png"} alt="Logo Padoca" /> 
          <img src={"https://static-images.ifood.com.br/image/upload/t_high/discoveries/53d43aea-1e16-45d2-98d8-baab21bd57db.png"} alt="Logo Padoca" />          
        </Carrousel>
                 
      </Content>
    </> 
  );
}

export default Shops;