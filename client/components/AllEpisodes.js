import React from 'react'
import Episodes from './Episodes'
import {connect} from 'react-redux'
import {fetchEpisodes} from '../store'

class AllEpisodes extends React.Component {
  constructor() {
    super()
    this.state = {
      searchVal: 'Test'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getEpisodes()
  }

  handleChange(evt) {
    console.log(evt.target.value)
    this.setState({searchVal: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.log('YEs!!!!', this.state.searchVal)
  }

  render() {
    return (
      <div>
        <div>
          <form
            className="flex justify-content-end"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              name="search"
              value={this.state.searchVal}
              onChange={this.handleChange}
            />
            <button type="submit"> Search </button>
          </form>
        </div>
        <Episodes episodes={this.props.episodes} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  episodes: state.episodes
})

const mapDispatchToProps = dispatch => ({
  getEpisodes: () => dispatch(fetchEpisodes())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllEpisodes)
