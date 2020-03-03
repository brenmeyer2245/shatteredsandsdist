import React from 'react'
import CityCard from './CityCard'
import CityTag from './CityTag'
import {connect} from 'react-redux'
import {fetchCities} from '../../store/citiesReducer'
import {urlPrefix} from '../../../Common/Constants'

class AllCities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCity: {},
      currentPictureId: 0,
      urlPrefix: urlPrefix.pics.cities
    }
    this.clickOnCity = this.clickOnCity.bind(this)
    this.updateCarosel = this.updateCarosel.bind(this)
  }
  async componentDidMount() {
    await this.props.getCities()
  }

  clickOnCity(city) {
    this.setState({currentCity: city, currentCityId: 0})
  }

  updateCarosel(newId){
    this.setState({currentPictureId: newId});
  }

  render() {
    return (
      <div id="city_view">
        <div className="city_intro red-trim elevatedCard">
          <h1>The World of the Shattered Sands </h1>
        </div>
        <div
          className="worldMap elevatedCard "
          style={{
            backgroundImage: `url('http://www.jbmeyer.org/wp-content/uploads/2018/07/ShatteredSands/pics/Shattered_Sands_Map.jpg')`
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

        {this.state.currentCity.id && (
          <div className="city_display">
            <CityCard
              name={this.state.currentCity.name}
              urlPrefix={this.state.urlPrefix}
              description={this.state.currentCity.description}
              pictures={this.state.currentCity.pictures}
              updateCarosel={this.updateCarosel}
              currentPictureId={this.state.currentPictureId}
            />
          </div>
        )}
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
