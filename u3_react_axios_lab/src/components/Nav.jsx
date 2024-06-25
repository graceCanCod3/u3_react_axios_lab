import { Link } from 'react-router-dom';

const Nav = () => {
  
  return (
    <div className="nav">
     
        <Link to="/">Home</Link>
        <Link to="/starships">Starship-List</Link>
        <Link to="/films">Film List</Link> 
        <Link to="/people">People</Link> 
        <Link to="/planet">Planet</Link> 

    
    </div>
  );
};

export default Nav;
