import { Container, Row, Col, Card } from 'react-bootstrap'

function Teams() {
  const teams = [
    { name: 'Argentina', flag: 'https://flagcdn.com/w160/ar.png' },
    { name: 'France', flag: 'https://flagcdn.com/w160/fr.png' },
    { name: 'Brazil', flag: 'https://flagcdn.com/w160/br.png' },
    { name: 'Morocco', flag: 'https://flagcdn.com/w160/ma.png' },
    { name: 'Tunisia', flag: 'https://flagcdn.com/w160/tn.png' },
    { name: 'Spain', flag: 'https://flagcdn.com/w160/es.png' },
  ]

  return (
    <Container id="teams" className="my-5">
      <h2 className="section-title">Teams</h2>
      <Row>
        {teams.map((team, index) => (
          <Col key={index} xs={6} md={4} lg={2} className="mb-3">
            <Card className="team-card text-center">
              <Card.Body>
                <img src={team.flag} alt={team.name} className="team-logo" />
                <Card.Text className="mt-2">{team.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Teams
