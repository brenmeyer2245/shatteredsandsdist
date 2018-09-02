import React, {Component} from 'react'

export default class CreateCharacterForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      class: '',
      bio: '',
      DEX: 0,
      CON: 0,
      STR: 0,
      WIS: 0,
      CHA: 0,
      INT: 0,
      headshotUrl: '',
      actor: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({
      name: '',
      class: '',
      bio: '',
      DEX: 0,
      CON: 0,
      STR: 0,
      WIS: 0,
      CHA: 0,
      INT: 0,
      headshotUrl: '',
      actor: ''
    })
    console.log(this.state)
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form-group m-3 elevatedCard red-trim p-4"
      >
        <label htmlFor="name" className="form-check">
          Name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="actor" className="form-check">
          Actor Name
        </label>
        <input
          name="actor"
          type="text"
          className="form-control"
          value={this.state.actor}
          onChange={this.handleChange}
        />
        <label htmlFor="class" className="form-check">
          Character Class
        </label>
        <input
          name="class"
          type="text"
          className="form-control"
          value={this.state.class}
          onChange={this.handleChange}
        />
        <label htmlFor="headshotUrl" className="form-check">
          Headshot File Name
        </label>
        <input
          name="headshotUrl"
          type="text"
          className="form-control"
          value={this.state.headshotUrl}
          onChange={this.handleChange}
        />
        <div className="p-3 text-center">
          <label htmlFor="DEX">DEX</label>
          <input
            className="m-2"
            name="DEX"
            type="number"
            min="0"
            max="40"
            value={this.state.DEX}
            onChange={this.handleChange}
          />
          <label htmlFor="CON">CON</label>
          <input
            className="m-2"
            name="CON"
            type="number"
            min="0"
            max="40"
            value={this.state.CON}
            onChange={this.handleChange}
          />
          <label htmlFor="INT">INT</label>
          <input
            className="m-2"
            name="INT"
            type="number"
            min="0"
            max="40"
            value={this.state.INT}
            onChange={this.handleChange}
          />
          <label htmlFor="WIS">WIS</label>
          <input
            className="m-2"
            name="WIS"
            type="number"
            min="0"
            max="40"
            value={this.state.WIS}
            onChange={this.handleChange}
          />
          <label htmlFor="STR">STR</label>
          <input
            className="m-2"
            name="STR"
            type="number"
            min="0"
            max="40"
            value={this.state.STR}
            onChange={this.handleChange}
          />

          <label htmlFor="CHA">CHA</label>
          <input
            className="m-2"
            name="CHA"
            type="number"
            min="0"
            max="40"
            value={this.state.CHA}
            onChange={this.handleChange}
          />
        </div>
        <label htmlFor="bio" className="form-check">
          Character Bio
        </label>
        <textArea
          name="bio"
          className="form-control"
          onChange={this.handleChange}
          value={this.state.bio}
          placeholder="Enter Bio Here..."
        />

        <button type="submit" className="btn-lg form-control w-75 m-2">
          Submit{' '}
        </button>
      </form>
    )
  }
}
