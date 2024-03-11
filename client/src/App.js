import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={process.env.PUBLIC_URL + '/john-b.jpg'} className='profile-pic' alt="John Bau-Madsen" />
                <h1>
                    Johnny's App
                </h1>
            </header>
        </div>
    );
}

export default App;
