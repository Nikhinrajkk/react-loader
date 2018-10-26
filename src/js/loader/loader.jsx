import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const iconStyle = (icon, color, size) => ({
  height: size,
  width: size,
  backgroundColor: color,
  WebkitMaskImage: `url(../../../assets/icons/${icon}.svg)`,
  maskImage: `url(../../../assets/icons/${icon}.svg)`
});

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      type = 'lines',
      isLoading,
      color = 'white',
      size = 40,
      segment = false,
      duration = 1,
      backgroundOpacity = 0.25
    } = this.props;

    const containerClass = segment ? 'loader-container segment' : 'loader-container global';

    return (
      isLoading &&
      <div
        className="loader-container"
        style={{
          backgroundColor: `rgb(0, 0, 0, ${backgroundOpacity})`,
          position: segment ? 'relative' : 'fixed'
        }}>
        <div className="loader-wrapper">
          <div className={`loader-${type}`} style={{ animationDuration: `${duration}s` }}>
            <div style={iconStyle(`spinner-of-${type}`, color, size)} />
          </div>
        </div>
      </div>
    );
  }
}

Loader.propTypes = {

};

Loader.defaultProps = {

};

export default Loader;
