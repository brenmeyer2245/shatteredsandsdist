import React, {Component} from 'react'

export default class CreateCharacterForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      icon: '',
      cast: '',
      series: '',
      audio: '',
      bookTitle: '',
      bookNumber: 0,
      chapterNumber: 0,
      episodeSummary: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.log(this.state)
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
        <label htmlFor="cast" className="form-check">
          Episode Cast
        </label>
        <input
          name="cast"
          type="text"
          className="form-control"
          value={this.state.cast}
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

        <button type="submit" className="btn-lg form-control w-75 m-2">
          Submit{' '}
        </button>
      </form>
    )
  }
}
