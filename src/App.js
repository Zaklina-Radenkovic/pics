import React from 'react'
import unsplash from './api/unsplash'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'

class App extends React.Component {
  state = { images: [] }

  // onSearchSubmit = async (term) => {
  //   //onSearchSubmit will be called with term - search term
  //   const response = await axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID 7oKQhEBOrVWLiPv4EWXjzCRF5vJuVOMzWqYC1wjej5Q',
  //     },
  //   })
  //   // .then((response) => {
  //   //   // console.log(response)

  //   // })

  //   // console.log(response.data.results)

  //   //updating State
  //   this.setState({ images: response.data.results })
  // }

  //AFTER REFACTORING
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 20 },
    })

    this.setState({ images: response.data.results })
    //console.log(response.data.results)
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmitTerm={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App
