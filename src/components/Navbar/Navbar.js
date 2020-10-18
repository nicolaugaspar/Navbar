import React from 'react';
import  {MenuItems} from './MenuItems';
import './Navbar.css';


class Navbar extends React.Component{
state={clicked: false}

handleClick = () =>{

	this.setState({clicked:!this.state.clicked})
}

render() {

	return(
		<div className="flex">
<nav className="NavbarItems">

        <h1 className="navbar-logo">React</h1>

        
        <ul className={this.state.clicked ? 'nav-menu active' :'nav-menu'}>
             {MenuItems.map((items, index)=>{

             	return(
             		 <li key={index}>
             		    <a className={items.cName} href={items.url}>
                          {items.title}
             		    </a>
             		 </li>
             		)
             })}
           
            

        </ul>
</nav>
</div>
		)
     }


}

export default Navbar