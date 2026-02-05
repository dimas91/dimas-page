import React, { useState } from 'react'
import './Tracklist.css'

type Episode = {
  name: string
  slug: string
  url: string
  tracks: string[]
}

export const Tracklist: React.FC<{ episode: Episode }> = ({ episode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="tracklist">
      <div className="tracklist-header">
        <h3 className="tracklist-title">{episode.name}</h3>
      </div>

      <audio controls className="tracklist-audio" src={episode.url}>
        Your browser does not support the audio element.
      </audio>

      <div style={{ marginTop: '.5rem' }}>
        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          className="tracklist-toggle"
        >
          {open ? 'Hide tracks' : `Show tracks (${episode.tracks.length})`}
        </button>
      </div>

      <div className={open ? 'tracks-wrapper open' : 'tracks-wrapper'}>
        <ul className="tracks-list">
          {episode.tracks.map((t, i) => {
            // remove any leading numbering like "01.", "1.", "01)" to avoid double numbers
            const cleaned = t.replace(/^\s*\d+\s*[\.):-]\s*/ , '').trim();
            return (
              <li key={i} className="tracks-item">
                <strong className="tracks-num">{i + 1}.</strong>
                <span>{cleaned}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Tracklist
