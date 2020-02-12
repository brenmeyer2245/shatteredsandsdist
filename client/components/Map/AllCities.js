import React from 'react'
import CityCard from './CityCard'
import CityTag from './CityTag'
import {connect} from 'react-redux'
import {fetchCities} from '../../store/citiesReducer'
import CityMarkerAnimation from '../animations/CityMarkerAnimation'
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

          {/* - Original Intro for this Page => Will determine if it Stays
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
          </p> */}
        </div>
        <div
          className="worldMap elevatedCard "
          style={{
            backgroundImage: `url('http://www.jbmeyer.org/wp-content/uploads/2018/07/ShatteredSands/pics/Shattered_Sands_Map.jpg')`
          }}
        >
         {/* <div style={{position: "relative", width: '1em', top: "45%", left:"16%", right: "0em", zIndex: "100"}}>
         <CityMarkerAnimation />
          </div> */}

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
