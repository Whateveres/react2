//My imports
import "./App.css";
import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";
import MyCard from "./components/Card";

//Boostrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

const App = () => {

  //Arreglo de objetos con contenido
  const CData = [
    {
      Cimage: "https://placedog.net/208",
      Ctitle: "Bartolo",
      Ctext: "Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!",
      Bcolor: "success",
      Btext: "Husky"
    },
    {
      Cimage: "https://placedog.net/202",
      Ctitle: "Messi",
      Ctext: "Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!",
      Bcolor: "primary",
      Btext: "Bobtail"
    },
    {
      Cimage: "https://placedog.net/203",
      Ctitle: "Gohan",
      Ctext: "Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional.",
      Bcolor: "danger",
      Btext: "Shar Pei"
    },
    {
      Cimage: "https://placedog.net/207",
      Ctitle: "Princesa",
      Ctext: "Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!",
      Bcolor: "warning",
      Btext: "Beagle"
    },
  ]

  return (
    <>

      <MyHeader title="Adopta un perrito" />

      <Row xs={1} md={2} className="g-4">   
      {CData.map((card, index) => (
        <MyCard
          key={index}
          Cimage={card.Cimage}
          Ctitle={card.Ctitle}
          Ctext={card.Ctext}
          Bcolor={card.Bcolor}
          Btext={card.Btext}
        />
      ))}
      </Row>

      <MyFooter />
    </>
  )
}

export default App