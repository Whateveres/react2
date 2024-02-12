import { Badge } from "react-bootstrap";

const MyBadge = ({Bcolor, Btext}) => {
    return (
        <Badge 
        className="badge" 
        bg={Bcolor}>{Btext}
        </Badge>
    );
}

export default MyBadge;
