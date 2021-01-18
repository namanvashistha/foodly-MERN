import {Link} from 'react-router-dom';

function Nav(){

    return(
        <div className="nav">
            <Link to="/">
                <div>foodly</div>
            </Link>
            
            <Link to="about">
                <div>about</div>
            </Link>    
        </div>
    );
}

export default Nav;