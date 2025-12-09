import React from 'react'
import episodes from '../data/mixed-feelings.json'
import Tracklist from '../components/Tracklist'

const Music: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Music</h2>
      <p>You can find some of my tracks and radio episodes here. Below are episode tracklists and audio links.</p>

      {Array.isArray(episodes) && episodes.length ? (
        episodes.reverse().map((ep: any) => (
          <Tracklist key={ep.slug} episode={ep} />
        ))
      ) : (
        <p>No episodes found. Add text files to <code>src/tracklists</code> and run the generator script.</p>
      )}
    </div>
  )
}

export default Music
