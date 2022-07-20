import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render(){
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    return (
      <section>
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          <p>{averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={ image } alt={ name }/>
        </div> 
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired
}

export default Pokemon;