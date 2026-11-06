import { Container, Row, Col } from 'react-bootstrap'
import PlayerCard from './PlayerCard'

function PlayersList(props) {
  return (
    <Container id="players" className="my-5">
      <h2 className="section-title">Players</h2>
      <Row>
        {props.players.map((player, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <PlayerCard
              name={player.name}
              team={player.team}
              nationality={player.nationality}
              jerseyNumber={player.jerseyNumber}
              age={player.age}
              image={player.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PlayersList
