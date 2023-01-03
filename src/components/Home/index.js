import './index.scss'
import Resume from '../../assets/resume.pdf'
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1> Hi, I'm  ARKA
          <br/>
        Software Engineer
        </h1>
        <h2> Machine Learning | Artificial Intelligence | FullStack Development</h2>
        <a href = {Resume} download className = 'btn'> Download Resume </a>
       
      </div>
    </div>
  )
}

export default Home