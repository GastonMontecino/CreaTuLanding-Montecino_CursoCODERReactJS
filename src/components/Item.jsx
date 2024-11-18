import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Item({item}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imagen} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
        {item.descripcion}
        </Card.Text>
        <Card.Text>
          USD{item.precio}
        </Card.Text>
        <Button variant="outline-dark" as={Link} to={`/item/${item.id}`}>Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;



// function Item ({item}){
//     return(
//         <>
//             <p>{item.nombre}</p>
//         </>
//     )
// }

// export default Item