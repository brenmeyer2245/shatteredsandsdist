import React from 'react'
import CityCard from './CityCard'
import CityTag from './CityTag'
import {connect} from 'react-redux'
import {fetchCities} from '../../store/citiesReducer'

class AllCities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCity: {}
    }
    this.clickOnCity = this.clickOnCity.bind(this)
  }
  async componentDidMount() {
    await this.props.getCities()
  }

  clickOnCity(city) {
    this.setState({currentCity: city})
  }

  render() {
    return (
      <div id="city_view">
        <div className="city_intro elevatedCard">
          <h1>The World of the Shattered Sands </h1>
          <p>
            {' '}
            This world is set within the vast and seemingly endless desert of
            the Shangazi, also known as the "Great Waste". <br />Along the edges
            of the Shangazi is the mountain range called the Vine. <br />Throughout
            SS there is a deep magic that runs through the ancient sands. Oasis'
            hidden by mirages, temples that come and go with the shifting winds
            of sand. <br />Grottos, slums, gladiator pits, hanging gardens,
            opium dens and bazaars litter most cities. Here under the harsh sun
            and reflections of the Shangzi your destiny is truly your own.{' '}
          </p>
        </div>
        <div
          className="worldMap elevatedCard m-2"
          style={{
            backgroundImage: `url('http://jbmeyer.org/wp-content/uploads/ShatteredSands/pics/Shattered_Sands_Map.jpg')`
          }}
        >
          {this.props.cities.map(city => (
            <CityTag
              clickOnCity={this.clickOnCity}
              city={city}
              currentCityId={this.state.currentCity.id}
              key={city.name}
              id={city.name}
            />
          ))}
        </div>

        {this.state.currentCity.id ? (
          <div className="city_display">
            <CityCard
              name={this.state.currentCity.name}
              description={this.state.currentCity.description}
              image={this.state.currentCity.pictures}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getCities: () => dispatch(fetchCities())
  // getCurrentCity: () => dispatch(fetchCurrentCity()),
})

const mapStateToProps = state => ({
  cities: state.cities,
  currentCity: state.currentCity
})

export default connect(mapStateToProps, mapDispatchToProps)(AllCities)
