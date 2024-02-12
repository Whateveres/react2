import Card from "react-bootstrap/Card";
import MyBadge from "./Tags";

const MyCard = ({ Cimage, Ctitle, Ctext, Bcolor, Btext }) => {
    return (
        <Card className="card_container" style={{ width: '25rem'}}>
            <Card.Img className="cimage" variant="top" src={Cimage} />
            <Card.Body>
                <Card.Title className="ctitle">{Ctitle}</Card.Title>
                <Card.Text className="ctext">{Ctext}</Card.Text>
                <MyBadge Bcolor={Bcolor} Btext={Btext} />
            </Card.Body>
        </Card>
    );
}

export default MyCard;