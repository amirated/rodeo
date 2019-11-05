class MovieCard extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {
    return (
      <div className="card mb-3" style={{'max-width': '300px'}}>
        <h4 className="card-header">{this.props.title}</h4>
        <img style={{width: '300px', display: 'block'}} src={this.props.imageurl} alt="Card image" />
        <div className="card-body">
          <h6 className="card-title">{this.props.subtitle}</h6>
          <h8 className="card-subtitle text-muted">{this.props.year}</h8>
          <br />
          <a href={'https://www.imdb.com/title/' + this.props.imdb} target="_blank" className="card-link">Check on IMDB</a>
        </div>
      </div>
    );
  }
}

export default MovieCard;
