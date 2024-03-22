function Image() {
  return (
    <img src="./src/assets/images/coverimg.jpg" alt="main-image" className="mainImg" />
  )
}

function Details() {
  return (
    <div className="about">
      <h1>Bob Stark</h1>
      <h3>Frontend Developer</h3>
      <p>bobstark.website</p>

      <div className="btn">
        <a href="#"><img src="./src/assets/svgs/email.svg" alt="" />Email</a>
        <a href="#"><img src="./src/assets/svgs/linkedin.svg" alt="" />LinkedIn</a>
      </div>
    </div>
  )
}

function Info() {
  return (
    <>
      <div className="info">
        <h3>About</h3>
        <p> &emsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro necessitatibus ab nihil nam voluptas veniam beatae vel, repellat quidem voluptate voluptatum at. </p>
      </div>
      <div className="info">
        <h3>Intrest</h3>
        <p>&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque ratione aspernatur corporis labore doloribus.</p>
      </div>
    </>
  )
}

function Footer() {
  return (
    <ul>
      <li><a href="#"><img src="./src/assets/svgs/github.svg" alt="" /></a></li>
      <li><a href="#"><img src="./src/assets/svgs/instagram.svg" alt="" /></a></li>
      <li><a href="#"><img src="./src/assets/svgs/linkedin.svg" alt="" /></a></li>
      <li><a href="#"><img src="./src/assets/svgs/twitter.svg" alt="" /></a></li>
    </ul>
  )
}


function App() {
  return (
    <div className="main">
      <Image />
      <div className="content">
        <Details />
        <Info />
        <Footer />
      </div>
    </div>
  )
}

export default App
