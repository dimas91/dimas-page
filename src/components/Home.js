import React from 'react'

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ fontWeight: "normal", fontSize: "400%" }}>DIMAS TICHELAAR</h1>
      <p>I am currently working on my personal website. Please come back later to get to know more about me. Until then, you can find me here:</p>
      <ul style={{ display: "flex", justifyContent: "space-between", gap: "2em" }}>
        <li><i class="fab fa-linkedin fa-lg"></i><a href="https://www.linkedin.com/in/dimas-tichelaar/" target="_blank" style={{ padding: "0em .5em" }}>Linkedin</a></li>
        <li><i class="fab fa-twitter fa-lg"></i><a href="https://twitter.com/Dimas091" target="_blank" style={{ padding: "0em .5em" }}>Twitter</a></li>
        <li><i class="fab fa-github fa-lg"></i><a href="https://github.com/dimas91" target="_blank" style={{ padding: "0em .5em" }}>Github</a></li>
        <li><i class="fab fa-soundcloud fa-lg"></i><a href="https://soundcloud.com/dimas-music" target="_blank" style={{ padding: "0em .5em" }}>Soundcloud</a></li>
      </ul>
      <p>Or send me an email: dimas.tichelaar at gmail dot com</p>
      <p>❤ - Dimas</p>
    </div>
  )
}

export default Home
