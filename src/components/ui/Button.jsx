import { Link } from "react-router-dom";
import "styles/ui/button.css"
const Button = ({ texto, url }) => {
    return (
        <Link to={url}
            className="btn gradient-btn"
        >
            {texto}
        </Link>
    )
}

export default Button