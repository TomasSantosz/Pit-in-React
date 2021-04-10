import React from 'react';
import { Content, ImagemShop, Description, } from './styles';
import LogoMcDonald from '../../../../images/shops/mac.webp';

function Shops(){
  return(
    <>
      <Content>
        <ImagemShop>
          <img src={LogoMcDonald} alt="Logo Padoca" />          
        </ImagemShop>
        <hr />
        
        <Description>   
          <p>Mc Donalds - Bairro Industrial</p>    
          <p>Lanches - 0,4 km</p> 
          <p>40-50 min - Gratis</p>
        </Description>
                 
      </Content>
    </> 
  );
}

export default Shops;