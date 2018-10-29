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
    const windowCenterHeight = `calc(50% - ${size / 2}px)`;
    const windowCenterWidth = `calc(50% - ${((size + spacing) * 4) / 2}px)`;
    const defaultStyle = {
      margin: spacing,
      backgroundColor: color,
      width: size,
      height: size,
      borderRadius: size
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

  renderSpanCircleLoader(color, size, spacing) {
    const windowCenterHeight = `calc(50% - ${size / 2}px)`;
    const windowCenterWidth = `calc(50% - ${((size + spacing) * 4) / 2}px)`;
    const defaultStyle = {
      margin: spacing,
      backgroundColor: color,
      width: size,
      height: size,
      borderRadius: size
    };
    return (
      <div style={{ position: 'relative', top: windowCenterHeight, left: windowCenterWidth, display: 'flex' }}>
        <div className="zig-zag" style={Object.assign({}, defaultStyle)} />
        <div className="zig-zag" style={Object.assign({ animationDelay: '0.1s' }, defaultStyle)} />
        <div className="zig-zag" style={Object.assign({ animationDelay: '0.2s' }, defaultStyle)} />
        <div className="zig-zag" style={Object.assign({ animationDelay: '0.3s' }, defaultStyle)} />
      </div>
    );
  }

  renderColorCircleLoader(duration, primaryColor, size, spacing, secondaryColor) {
    const windowCenterHeight = `calc(50% - ${size / 2}px)`;
    const windowCenterWidth = `calc(50% - ${((size + spacing) * 4) / 2}px)`;
    const defaultStyle = {
      margin: spacing,
      width: size,
      height: size,
      borderRadius: size
    };
    return (
      <div style={{ position: 'relative', top: windowCenterHeight, left: windowCenterWidth, display: 'flex' }}>
        <div className="color" style={Object.assign({ animationDuration: `${duration}s` }, defaultStyle)} />
        <div className="color" style={Object.assign({ animationDelay: '.2s', animationDuration: `${duration}s` }, defaultStyle)} />
        <div className="color" style={Object.assign({ animationDelay: '.4s', animationDuration: `${duration}s` }, defaultStyle)} />
        <div className="color" style={Object.assign({ animationDelay: '.6s', animationDuration: `${duration}s` }, defaultStyle)} />
      </div>
    );
  }

  renderSpinners() {
    const {
      type = 'lines',
      isLoading,
      size = 40,
      segment = false,
      duration = 1,
      backgroundOpacity = 0.25,
      spacing = 4,
      primaryColor = "yellow",
      secondaryColor = "green"
    } = this.props;

    switch (type) {
      case 'dot-spinner':
        return this.renderDotLoader(primaryColor, size, spacing)
      case 'zig-zag-spinner':
        return this.renderSpanCircleLoader(primaryColor, size, spacing)
      case 'color-spinner':
        return this.renderColorCircleLoader(duration, primaryColor, size, spacing, secondaryColor)
      default:
        return this.renderCircleLoader(duration, type, primaryColor, size)
    }
  }

  render() {
    const {
      isLoading,
      segment = false,
      backgroundOpacity = 0.25,
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
          {this.renderSpinners()}
        </div>
      )
    );
  }
}

export default Loader;
