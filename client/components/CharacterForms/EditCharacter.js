import React, {Component} from 'react'
import {getCharacterById, updateCharacter} from '../../store'
import history from '../../history'
import {connect} from 'react-redux'

export class EditCharacterForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      classType: '',
      bio: '',
      DEX: 10,
      CON: 10,
      STR: 10,
      WIS: 10,
      CHA: 10,
      INT: 10,
      headshotUrl: '',
      actor: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidUpdate(pastProps) {
    if (!pastProps.currentCharacter && this.props.currentCharacter) {
      const {name, bio, headshot, actor} = this.props.currentCharacter
      const classType = this.props.currentCharacter.class
      const {
        dexterity,
        intelligence,
        constitution,
        wisdom,
        strength,
        charisma
      } = this.props.currentCharacter.Stat

      this.setState({
        name,
        bio,
        actor,
        headshotUrl: headshot,
        classType,
        DEX: dexterity,
        INT: intelligence,
        CON: constitution,
        WIS: wisdom,
        STR: strength,
        CHA: charisma
      })
    }
  }

  invalidState = () => {
    const {DEX, CON, STR, WIS, CHA, INT, name, classType} = this.state
    const stats = [DEX, CON, STR, WIS, CHA, INT]
    let invalid = stats.reduce((sum, stat) => {
      stat = parseInt(stat, 10)
      if (stat < 0 || stat > 40) {
        sum++
      }
      return sum
    }, 0)
    if (invalid > 0) return true
    if (name === '') return true
    if (classType === '') return true
    return false
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.createCharacter(this.state)
    history.push('/characters')
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
        <label htmlFor="classType" className="form-check">
          Character Class
        </label>
        <input
          name="classType"
          type="text"
          className="form-control"
          value={this.state.classType}
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
        <div className="container">
          <label className="center">Character Stats by Full Number</label>
          <div className="row ml-sm-5">
            <div className="col-1">
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
            </div>
            <div className="col-1">
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
            </div>
            <div className="col-1">
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
            </div>

            <div className="col-1">
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
            </div>
            <div className="col-1">
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
            </div>
            <div className="col-1">
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
          </div>
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

        <button
          type="submit"
          disabled={this.invalidState()}
          className={
            this.invalidState() ? 'invisible' : 'btn-lg form-control w-75 m-2'
          }
        >
          Submit{' '}
        </button>
      </form>
    )
  }
}

const mapState = (state, {match}) => ({
  currentCharacter: getCharacterById(
    state.characters,
    parseInt(match.params.characterId, 10)
  )
})

const mapDispatch = dispatch => ({
  editCharacter: editedCharacter => dispatch(updateCharacter(editedCharacter))
})

export default connect(mapState, mapDispatch)(EditCharacterForm)
