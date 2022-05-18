// import Card from './card.jsx';
// import ReactDOM from 'react-dom/client';

async function getData(cb){
    let data = [];
    for(let i = 0; i<=42; i++){
        const request = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`);
        const responseJSON = await request.json();
        data = data.concat(responseJSON.results);
    };
    
    data = data.map((item)=>{
        return {
            died: item.status,
            name: item.name,
            species: item.species,
            origin: item.origin.name,
            location: item.location.name,
            episodes: item.episode.length,
            photo: item.image,
        };
    });
    return cb(data);
};

function renderHTML(info){
    console.log(info);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    
        
    // root.render(<Layout component = {Card} info={info} />);
    const my_page = highComponent(Card,info);
    root.render(my_page());
};

function highComponent(Component, info){
    return function Layout(){
        return(
        <main>
            <header>
                <div>
                    Rick & Morty
                </div>
                <span>list of characters.</span>
                <a href="#list">Clique aqui!</a>
            </header>

            <div id='list'>
            {info.map(character => <Component
                died={character.died} 
                name={character.name} 
                species={character.species} 
                gender={character.gender} 
                origin={character.origin} 
                location={character.location} 
                episodes={character.episodes} 
                photo={character.photo} />)}
            </div>
        </main>
        );
    };
    
};

getData(renderHTML);

