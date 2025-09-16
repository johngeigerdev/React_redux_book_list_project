import { NavLink } from 'react-router-dom';

function Header({pageTitle}) {

    return (
      <>

            <h1>{pageTitle}</h1>

            <div className="header-btns">
               <NavLink to="/"> {/* NavLink auto adds an 'active' class when something is selected. you can define what the active class should do in the CSS file  */}
                <button className="btn">
                  Books
                </button>
              </NavLink>
              
              <NavLink to="/add-book">
                <button className="btn">
                    Add Book +
                </button>
              </NavLink>
              


          
            </div>
    
      </>
    )
  }
  
  export default Header
  