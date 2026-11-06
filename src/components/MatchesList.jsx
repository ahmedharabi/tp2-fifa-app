import { Container, Row, Col } from 'react-bootstrap'
import MatchCard from './MatchCard'

function MatchesList(props) {
  return (
    <div className="matches-section">
      <Container id="matches" className="py-5">
        <h2 className="section-title">Matches</h2>
        <Row>
          {props.matches.map((match, index) => (
            <Col key={index} md={6} className="mb-4">
              <MatchCard
                team1={match.team1}
                team2={match.team2}
                logo1={match.logo1}
                logo2={match.logo2}
                score={match.score}
                date={match.date}
                time={match.time}
                status={match.status}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MatchesList
