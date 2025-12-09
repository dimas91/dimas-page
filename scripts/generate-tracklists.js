const fs = require('fs');
const path = require('path');

/*
  Generator script to create `src/data/mixed-feelings.json` from text files in
  `src/tracklists/`.

  Expected filename format: "Mixed Feelings [episode name] Tracklist.txt"
  Example: "Mixed Feelings Late Night 2025 Tracklist.txt"

  The generated JSON will contain objects:
  {
    name: string,       // original episode name
    slug: string,       // url-safe slug used to build audio URL
    url: string,        // audio URL derived from slug
    tracks: string[]    // lines from the file (non-empty)
  }

  Usage:
    node scripts/generate-tracklists.js

  If `src/tracklists` is empty, the script will write an empty array.
*/

const TRACKLISTS_DIR = path.join(__dirname, '..', 'src', 'tracklists');
const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'mixed-feelings.json');

function slugify(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9\s_-]/g, '')
        .trim()
        .replace(/\s+/g, '_');
}

function buildUrl(slug) {
    return `https://audio.dimas.io/dimas_-_mixed_feelings_${slug}.mp3`;
}

if (!fs.existsSync(TRACKLISTS_DIR)) {
    console.warn('Tracklists folder not found:', TRACKLISTS_DIR);
    fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
    fs.writeFileSync(OUT_FILE, JSON.stringify([], null, 2), 'utf8');
    console.log('Wrote empty JSON to', OUT_FILE);
    process.exit(0);
}

const files = fs.readdirSync(TRACKLISTS_DIR).filter(f => /mixed feelings/i.test(f));

const episodes = files.map(filename => {
    const filePath = path.join(TRACKLISTS_DIR, filename);
    const raw = fs.readFileSync(filePath, 'utf8');

    // Try to extract episode name from filename
    // Expected: Mixed Feelings [episode name] Tracklist(.txt)
    const m = filename.match(/Mixed Feelings\s+(.*)\s+Tracklist/i);
    const name = (m && m[1]) ? m[1].trim() : filename.replace(/\.[^.]+$/, '');
    const slug = slugify(name);

    const tracks = raw
        .split(/\r?\n/)
        .map(l => l.trim())
        .filter(Boolean);

    return {
        name,
        slug,
        url: buildUrl(slug),
        tracks
    };
});

// Sort episodes by name to ensure consistent order in the generated JSON
episodes.sort((a, b) => String(a.name).localeCompare(String(b.name)));

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(episodes, null, 2), 'utf8');
console.log('Generated', OUT_FILE, 'with', episodes.length, 'episodes (sorted by name)');
