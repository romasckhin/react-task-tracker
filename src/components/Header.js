import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({onAdd,showAdd}) => {

    const location = useLocation()

    return (

        <header className='header'>

            <h1>Task tracker</h1>

            { location.pathname === '/' && <Button
                showAdd={showAdd}
                onAdd={onAdd}
            />
            }

        </header>
    );
};

export default Header;