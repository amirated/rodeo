import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import React from 'react';

import MovieCard from '../components/MovieCard';
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  keyPress = event => {
    if (event.key === 'Enter') {
      this.setState({text: event.target.value});
      this.makeSearch();
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  makeSearch = async function() {
    const res = await fetch('http://www.omdbapi.com/?s=' + this.state.text + '&apikey=77e6bb21');
    const data = await res.json();
    if (data.Response == 'True' && data.Search) {
      this.setState({data: data.Search});
    } else {
      this.setState({data: false});
    } 
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>Search for the movie</h1>
          <p>Enter keywords..</p>
            <input className="form-control mr-sm-2"
             type="text"
             name="search"
             value={this.state.text}
             onChange={this.handleChange}
             onKeyPress={this.keyPress}
             autoComplete="off"/>
            <button className="btn btn-secondary my-2 my-sm-0" onClick={() => this.makeSearch().bind(this)}>Search</button>
        </div>
        {this.state.data && this.state.data.map((item, index) => (
          <div key={index}><MovieCard title={item.Title}
                                      imageurl={item.Poster}
                                      subtitle={item.Type}
                                      year={item.year}
                                      />
          </div>
          
        ))}
        {!this.state.data && <div>Movie Not Found.</div>}
      </Layout>
    );
  }
}

export default Index;