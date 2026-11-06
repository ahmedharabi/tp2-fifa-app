import { Card, Badge } from 'react-bootstrap'

function MatchCard(props) {
  let color = 'secondary'
  if (props.status === 'Live') {
    color = 'danger'
  } else if (props.status === 'Finished') {
    color = 'success'
  }

  return (
    <Card className="match-card text-center">
      <Card.Header>
        {props.date} - {props.time}
      </Card.Header>
      <Card.Body>
        <div className="match-teams">
          <div>
            <img src={props.logo1} alt={props.team1} className="team-logo" />
            <p>{props.team1}</p>
          </div>
          <h3 className="score">{props.score}</h3>
          <div>
            <img src={props.logo2} alt={props.team2} className="team-logo" />
            <p>{props.team2}</p>
          </div>
        </div>
        <Badge bg={color}>{props.status}</Badge>
      </Card.Body>
    </Card>
  )
}

export default MatchCard
