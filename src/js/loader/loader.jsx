import React from 'react';
import './styles.css';

const iconStyle = (icon, color, size) => ({
  height: size,
  width: size,
  backgroundColor: color,
  WebkitMaskImage: `url(../../../assets/icons/${icon}.svg)`,
  maskImage: `url(../../../assets/icons/${icon}.svg)`
});

class Loader extends React.Component {

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

    const windowCenter = `calc(50% - ${size / 2}px)`;
    return (
      isLoading &&
      <div
        className="loader-container"
        style={{
          backgroundColor: `rgb(0, 0, 0, ${backgroundOpacity})`,
          position: segment ? 'absolute' : 'fixed'
        }}>
        <div style={{ position: 'absolute', top: windowCenter, left: windowCenter }}>
          <div className={`loader-wrapper loader-${type}`} style={{ animationDuration: `${duration}s` }}>
            <div style={iconStyle(`spinner-of-${type}`, color, size)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
