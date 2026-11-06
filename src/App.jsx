import MyNavbar from './components/MyNavbar'
import PlayersList from './components/PlayersList'
import MatchesList from './components/MatchesList'
import Teams from './components/Teams'
import Footer from './components/Footer'

function App() {
  const players = [
    {
      name: 'Lionel Messi',
      team: 'Inter Miami',
      nationality: 'Argentina',
      jerseyNumber: 10,
      age: 39,
      image: 'https://ui-avatars.com/api/?name=Lionel+Messi&size=300&background=75aadb&color=fff',
    },
    {
      name: 'Kylian Mbappé',
      team: 'Real Madrid',
      nationality: 'France',
      jerseyNumber: 9,
      age: 27,
      image: 'https://ui-avatars.com/api/?name=Kylian+Mbappe&size=300&background=1e3a8a&color=fff',
    },
    {
      name: 'Erling Haaland',
      team: 'Manchester City',
      nationality: 'Norway',
      jerseyNumber: 9,
      age: 26,
      image: 'https://ui-avatars.com/api/?name=Erling+Haaland&size=300&background=6cabdd&color=fff',
    },
    {
      name: 'Achraf Hakimi',
      team: 'PSG',
      nationality: 'Morocco',
      jerseyNumber: 2,
      age: 27,
      image: 'https://ui-avatars.com/api/?name=Achraf+Hakimi&size=300&background=c1272d&color=fff',
    },
    {
      name: 'Mohamed Salah',
      team: 'Liverpool',
      nationality: 'Egypt',
      jerseyNumber: 11,
      age: 34,
      image: 'https://ui-avatars.com/api/?name=Mohamed+Salah&size=300&background=c8102e&color=fff',
    },
    {
      name: 'Ellyes Skhiri',
      team: 'Eintracht Frankfurt',
      nationality: 'Tunisia',
      jerseyNumber: 17,
      age: 31,
      image: 'https://ui-avatars.com/api/?name=Ellyes+Skhiri&size=300&background=e70013&color=fff',
    },
  ]

  const matches = [
    {
      team1: 'Argentina',
      team2: 'France',
      logo1: 'https://flagcdn.com/w160/ar.png',
      logo2: 'https://flagcdn.com/w160/fr.png',
      score: '3 - 3',
      date: '18/12/2022',
      time: '16:00',
      status: 'Finished',
    },
    {
      team1: 'Morocco',
      team2: 'Spain',
      logo1: 'https://flagcdn.com/w160/ma.png',
      logo2: 'https://flagcdn.com/w160/es.png',
      score: '0 - 0',
      date: '06/12/2022',
      time: '16:00',
      status: 'Finished',
    },
    {
      team1: 'Tunisia',
      team2: 'Brazil',
      logo1: 'https://flagcdn.com/w160/tn.png',
      logo2: 'https://flagcdn.com/w160/br.png',
      score: '1 - 2',
      date: '20/06/2026',
      time: '20:00',
      status: 'Live',
    },
    {
      team1: 'Germany',
      team2: 'Portugal',
      logo1: 'https://flagcdn.com/w160/de.png',
      logo2: 'https://flagcdn.com/w160/pt.png',
      score: '-',
      date: '25/06/2026',
      time: '21:00',
      status: 'Upcoming',
    },
  ]

  return (
    <div>
      <MyNavbar />
      <div className="banner">
        <h1>⚽ FIFA App</h1>
        <p>Players, matches and teams in one place</p>
      </div>
      <PlayersList players={players} />
      <MatchesList matches={matches} />
      <Teams />
      <Footer />
    </div>
  )
}

export default App
