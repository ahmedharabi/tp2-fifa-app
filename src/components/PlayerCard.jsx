import { Card, ListGroup } from 'react-bootstrap'

function PlayerCard(props) {
  return (
    <Card className="player-card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <span className="jersey">#{props.jerseyNumber}</span>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item><b>Team:</b> {props.team}</ListGroup.Item>
        <ListGroup.Item><b>Nationality:</b> {props.nationality}</ListGroup.Item>
        <ListGroup.Item><b>Age:</b> {props.age}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default PlayerCard
