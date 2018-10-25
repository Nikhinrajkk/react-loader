import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const iconStyle = (icon, width, height) => ({
  height: width,
  width: height,
  backgroundColor: 'white',
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
    const { type, isLoading } = this.props;
    const iconUrl = `../../../assets/icons/${type}.svg`;
    return (
      isLoading &&
      <div className="loader-container">
        <div className="loader-wrapper">
          <div>
            <div style={iconStyle('spinner-of-dots', 20, 20)} />
            <img id="loader" src={iconUrl} alt="ing" height={35} width={35}/>
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
