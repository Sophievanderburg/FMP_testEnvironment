import './App.css';
import sessionNotes from './data/notes.json';

function App() {
  const notes = Object.values(sessionNotes.noteItems);

  return (
    <div className="App">
      <header className="header">
        <p>nové</p>
      </header>
      <main className="main">
        <div className="videocall">
          <div className="video"></div>
          <div className="caller"></div>
          <div className="data"></div>
        </div>
        <div className="epd">
          <h1>EPD</h1>
        </div>
        <div className="notes">
          <h1>Notes</h1>
          {notes.map((note) => (
            <div key={note.title} className="note">
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>Sophie van der Burg</p>
      </footer>
    </div>
  );
}

export default App;
