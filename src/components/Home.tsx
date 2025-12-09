import React from 'react'

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ fontWeight: "normal", fontSize: "400%" }}>DIMAS TICHELAAR</h1>
      <p>I am currently working on my personal website. Please come back later to get to know more about me. Until then, you can find me here:</p>
      <ul style={{ display: "flex", justifyContent: "space-between", gap: "2em" }}>
        <li><i className={"fab fa-linkedin fa-lg"}></i><a href="https://www.linkedin.com/in/dimas-tichelaar/" target="_blank" rel="noreferrer" style={{ padding: "0em .5em" }}>Linkedin</a></li>
        <li><i className={"fab fa-instagram fa-lg"}></i><a href="https://www.instagram.com/dimas91" target="_blank" rel="noreferrer" style={{ padding: "0em .5em" }}>Instagram</a></li>
        <li><i className={"fab fa-github fa-lg"}></i><a href="https://github.com/dimas91" target="_blank" rel="noreferrer" style={{ padding: "0em .5em" }}>Github</a></li>
        <li><i className={"fab fa-soundcloud fa-lg"}></i><a href="https://soundcloud.com/dimas-music" target="_blank" rel="noreferrer" style={{ padding: "0em .5em" }}>Soundcloud</a></li>
      </ul>
      <p>❤️ - Dimas</p>
    </div>
  )
}

export default Home
