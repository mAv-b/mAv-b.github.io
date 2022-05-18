class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            died : props.died,
            name : props.name,
            species: props.species,
            gender : props.gender,
            origin : props.origin,
            location : props.location,
            episodes : props.episodes,
            photo : props.photo,
        };
    };
    
    render(){
        return(
            <div className='card'>
                {this.state.died === 'Alive' && <img className='character-alive' src={this.state.photo} alt="Foto de perfil" />}
                {this.state.died === 'unknown' && <img className='character-missed' src={this.state.photo} alt="Foto de perfil" />}
                {this.state.died === 'Dead' && <img className='character-dead' src={this.state.photo} alt="Foto de perfil" />}
                <div className="config">
                    <span>Nome: {this.state.name}</span>
                    <span>Especie: {this.state.species}</span>
                    <span>Genero: {this.state.gender}</span>
                    <span>Origem: {this.state.origin}</span>
                    <span>Localização: {this.state.location}</span>
                    <span>Numero de aparições: {this.state.episodes}</span>
                </div>
            </div>
        )
    }
};