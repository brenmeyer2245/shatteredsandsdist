import React from 'react'
import Episodes from './Episodes'
import {connect} from 'react-redux'

class AllEpisodes extends React.Component {
  componentDidMount() {}
  render() {
    return <Episodes episodes={this.props.episodes} />
  }
}
const mapStateToProps = state => ({
  episodes: state.episodes
})

// const mapDispatchToProps = dispatch => ({
//   getEpisodes: () => dispatch(fetchEpisodes()),
// });

export default connect(mapStateToProps)(AllEpisodes)
