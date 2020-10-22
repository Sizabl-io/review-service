import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Review from './components/Review.jsx';
import ReviewBar from './components/ReviewBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };

    this.searchReviews = this.searchReviews.bind(this);
  }

  getId() {
    let params = location.search.substring(1).split('=');
    return params[params.indexOf('id') + 1] || 1;
  }

  componentDidMount() {
    this.searchReviews();
  }

  searchReviews(text = '') {
    let id = this.getId();
    axios.get(`/api/reviews/${id}`, { params: { text } })
      .then((reviews) => {
        this.setState({ reviews: reviews.data });
      }
      );
  }

  render() {
    return (
      <div>
        <ReviewBar reviewsCount={this.state.reviews.length} searchReviews={this.searchReviews}/>
        <div>{this.state.reviews.map((review, key) => (
          <Review key={key} review={review} />
        ))}
        </div>
      </div>


    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));