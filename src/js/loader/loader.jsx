import React from 'react';
import './styles.css';
/* eslint-disable class-methods-use-this */

const iconStyle = (icon, color, size) => ({
  height: size,
  width: size,
  backgroundColor: color,
  WebkitMaskImage: `url(../../../assets/icons/${icon}.svg)`,
  maskImage: `url(../../../assets/icons/${icon}.svg)`
});

class Loader extends React.Component {
  renderCircleLoader(duration, type, color, size) {
    const windowCenter = `calc(50% - ${size / 2}px)`;
    return (
      <div style={{ position: 'absolute', top: windowCenter, left: windowCenter }}>
        <div className={`loader-${type}`} style={{ animationDuration: `${duration}s` }}>
          <div style={iconStyle(`spinner-of-${type}`, color, size)} />
        </div>
      </div>
    );
  }

  renderDotLoader(color, size, spacing) {
    const radius = size / 2;
    const windowCenterHeight = `calc(50% - ${size / 2}px)`;
    const windowCenterWidth = `calc(50% - ${((size + spacing) * 4) / 2}px)`;
    const defaultStyle = {
      margin: spacing,
      backgroundColor: color,
      width: size,
      height: size,
      borderRadius: radius
    };
    return (
      <div style={{ position: 'relative', top: windowCenterHeight, left: windowCenterWidth, display: 'flex' }}>
        <div className="dot" style={Object.assign({}, defaultStyle)} />
        <div className="dot" style={Object.assign({ animationDelay: '0.1s' }, defaultStyle)} />
        <div className="dot" style={Object.assign({ animationDelay: '0.2s' }, defaultStyle)} />
        <div className="dot" style={Object.assign({ animationDelay: '0.3s' }, defaultStyle)} />
      </div>
    );
  }

  render() {
    const {
      type = 'lines',
      isLoading,
      color = 'white',
      size = 40,
      segment = false,
      duration = 1,
      backgroundOpacity = 0.25,
      spacing = 4
    } = this.props;
    return (
      isLoading
      && (
        <div
          className="loader-container"
          style={{
            backgroundColor: `rgb(0, 0, 0, ${backgroundOpacity})`,
            position: segment ? 'absolute' : 'fixed'
          }}
        >
          { type === 'dot-spinner'
            ? this.renderDotLoader(color, size, spacing)
            : this.renderCircleLoader(duration, type, color, size)
          }
        </div>
      )
    );
  }
}

export default Loader;
