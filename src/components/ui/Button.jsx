import { Link } from "react-router-dom";
import "styles/ui/button.css"
const Button = ({ texto, url }) => {
    return (
        <Link to={url}
            className={texto !== 'Detalles' ? `btn gradient-btn` :'btn btn-ghost btn-xs'}
        >
            {texto}
        </Link>
    )
}

export default Button