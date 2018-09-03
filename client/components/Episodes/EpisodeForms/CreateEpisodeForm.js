import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postEpisode} from '../../../store'
import CharacterSelect from './CharacterSelect'

export class CreateCharacterForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      icon: '',
      series: 'BWS',
      audio: '',
      bookTitle: '',
      bookNumber: 0,
      chapterNumber: 0,
      episodeSummary: '',
      characters: {},
      selectHidden: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  characterSelection = evt => {
    const newCharacters = Object.assign({}, this.state.characters)
    if (newCharacters[evt.target.value]) delete newCharacters[evt.target.value]
    else newCharacters[evt.target.value] = true
    console.log(newCharacters)
    this.setState({characters: newCharacters})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const newEpisode = {
      title: this.state.title,
      icon: this.state.icon,
      series: this.state.series,
      audio: this.state.audio,
      bookTitle: this.state.bookTitle,
      bookNumber: this.state.bookNumber,
      chapterNumber: this.state.chapterNumber,
      episodeSummary: this.state.chapterNumber,
      episodeCharacters: Object.keys(this.state.characters)
    }
    console.log(newEpisode)
    this.props.createEpisode(newEpisode)
  }

  handleAddCharacterSelect = () => {
    const toggleAdding = !this.state.selectHidden
    this.setState({selectHidden: toggleAdding})
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form-group m-3 elevatedCard red-trim p-4"
      >
        <label htmlFor="title" className="form-check">
          Episode Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor="icon" className="form-check">
          Episode Icon File Name
        </label>
        <input
          name="icon"
          type="text"
          className="form-control"
          value={this.state.icon}
          onChange={this.handleChange}
        />
        <label htmlFor="series" className="form-check">
          Book Series
        </label>
        <select
          name="series"
          className="form-control"
          value={this.state.series}
          onChange={this.handleChange}
        >
          <option value="BWS">Blood Wet Sands</option>

          <option value="VOS">Veil of Spears </option>
        </select>

        <label htmlFor="audio" className="form-check">
          Episode Audio File Name
        </label>
        <input
          name="audio"
          type="text"
          className="form-control"
          value={this.state.audio}
          onChange={this.handleChange}
        />

        <label htmlFor="bookTitle" className="form-check">
          Book Title
        </label>
        <input
          name="bookTitle"
          type="text"
          className="form-control"
          value={this.state.bookTitle}
          onChange={this.handleChange}
        />

        <label htmlFor="bookNumber">Book Number</label>
        <input
          className="m-2"
          name="bookNumber"
          type="number"
          min="0"
          max="10"
          value={this.state.bookNumber}
          onChange={this.handleChange}
        />
        <label htmlFor="chapterNumber">Chapter Number</label>
        <input
          className="m-2"
          name="chapterNumber"
          type="number"
          min="0"
          max="20"
          value={this.state.chapterNumber}
          onChange={this.handleChange}
        />

        <label htmlFor="episodeSummary" className="form-check">
          Episode Summary
        </label>
        <textArea
          name="episodeSummary"
          className="form-control"
          onChange={this.handleChange}
          value={this.state.episodeSummary}
          placeholder="Enter Summary Here..."
        />
        <CharacterSelect
          showSelect={this.handleAddCharacterSelect}
          hidden={this.state.selectHidden}
          addCharacter={this.characterSelection}
        />
        <button type="submit" className="btn-lg form-control w-75 m-2">
          Submit{' '}
        </button>
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  createEpisode: newEpisode => dispatch(postEpisode(newEpisode))
})

export default connect(null, mapDispatch)(CreateCharacterForm)
