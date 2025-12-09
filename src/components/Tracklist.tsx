import React from 'react'

type Episode = {
  name: string
  slug: string
  url: string
  tracks: string[]
}

export const Tracklist: React.FC<{ episode: Episode }> = ({ episode }) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '1rem', marginBottom: '1rem' }}>
      <h3 style={{ margin: 0 }}>{episode.name}</h3>
      <audio controls style={{ width: '100%', marginTop: '.5rem' }} src={episode.url}>
        Your browser does not support the audio element.
      </audio>
      <ul style={{ marginTop: '.75rem', paddingLeft: 0 }}>
        {episode.tracks.map((t, i) => {
          // remove any leading numbering like "01.", "1.", "01)" to avoid double numbers
          const cleaned = t.replace(/^\s*\d+\s*[\.):-]\s*/ , '').trim();
          return (
            <li key={i} style={{ marginBottom: '.25rem', listStyle: 'none' }}>
              <strong style={{ marginRight: '0.5rem' }}>{i + 1}.</strong>
              <span>{cleaned}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tracklist
