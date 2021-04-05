import React from 'react';
import { Link } from 'react-router-dom';
import { Header, IconsMenu } from './styles';
import { FaHome, FaUser, FaSearch, FaBox } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

function HeaderMenu(){
  const location = useLocation();
  console.log(location.pathname);


  return(
    <Header>
      <IconsMenu>
        <Link to={'/'}>
          {location.pathname === '/'           
          ?
            <>
              <FaHome color={"white"} fontWeight={"bold"} size={22} onClick={()=>{console.log("oi")}}/>
              <p className="active" style={{fontWeight: "bold"}}>Inicio</p>
            </>
          :
            <>
              <FaHome color={"white"} size={20} onClick={()=>{console.log("oi")}}/>
              <p>Inicio</p>
            </>
          }
        </Link>
      </IconsMenu>
      <IconsMenu>
        <Link to={'/search'}>
        {location.pathname === '/search'           
          ?
            <>
              <FaSearch color={"white"} fontWeight={"bold"} size={22} onClick={()=>{console.log("oi")}}/>
              <p className="active" style={{fontWeight: "bold"}}>Inicio</p>
            </>
          :
            <>
              <FaSearch color={"white"} size={20} onClick={()=>{console.log("oi")}}/>            
              <p>Busca</p>
            </>
          }          
        </Link>
      </IconsMenu>
      <IconsMenu>
        <Link to={'/order'}>
        {location.pathname === '/order'           
          ?
            <>            
              <FaBox color={"white"} fontWeight={"bold"} size={22} onClick={()=>{console.log("oi")}}/>                
              <p className="active" style={{fontWeight: "bold"}}>Pedidos</p>              
            </>
          :
            <>
              <FaBox color={"white"} size={20} onClick={()=>{console.log("oi")}}/>                
              <p>Pedidos</p>
            </>
          }
        </Link>
      </IconsMenu>
      <IconsMenu>
        <Link to={'/profile'}>  
        {location.pathname === '/profile'           
          ?
            <>
              <FaUser color={"white"} fontWeight={"bold"} size={22} onClick={()=>{console.log("oi")}}/>
              <p className="active" style={{fontWeight: "bold"}}>Perfil</p>             
            </>
          :
            <>
              <FaUser color={"white"} size={20} onClick={()=>{console.log("oi")}}/>
              <p>Perfil</p>
            </>
          }                            
          
        </Link>
      </IconsMenu>
    </Header>   
  );
}

export default HeaderMenu;