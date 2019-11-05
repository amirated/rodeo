class MovieCard extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {
    return (
      <div className="card mb-3">
        <h3 className="card-header">{this.props.title}</h3>
        <img style={{height: '200px', display: 'block'}} src={this.props.imageurl} alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{this.props.subtitle}</h5>
          <h6 className="card-subtitle text-muted">{this.props.year}</h6>
        </div>
      </div>
    );
  }
}

export default MovieCard;
