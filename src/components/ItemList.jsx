import Item from './Item'
import  {Row}  from 'react-bootstrap'
import {Container} from 'react-bootstrap'

function ItemList({items}) {
    return(
        <>
        <Container>
            <Row>
                {items.map (item => <Item item={item} key={item.id}/>)}
            </Row>
        </Container>
            
        </>
    )
}

export default ItemList