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
  getStyle(type, color, size, index) {
    switch (type) {
      case 'dot':
        return {
          backgroundColor: color,
          borderRadius: size / 3
        };
      case 'op-dot':
        return {
          backgroundColor: color,
          width: size / 2.5,
          height: size / 2.5,
          borderRadius: size,
          opacity: (index / 12)
        };
      case 'opdot':
        return {
          backgroundColor: color,
          width: size * index / 25,
          height: size * index / 25,
          borderRadius: size,
          opacity: (index / 12)
        };
      case 'circle':
        return {
          border: `2px solid ${color}`,
          borderRadius: size / 3
        };
      case 'bars':
        return {
          backgroundColor: color,
          width: size - size / 4,
          height: size / 6
        };
      case 'lines':
        return {
          backgroundColor: color,
          width: size - size / 4,
          height: size / 4,
          borderRadius: size
        };
      case 'op-lines':
        return {
          backgroundColor: color,
          width: size - size / 4,
          height: size / 4,
          borderRadius: size,
          opacity: (index / 12)
        };
      case 'ellipse':
        return {
          backgroundColor: color,
          width: size / 5,
          height: size / 2.5,
          borderRadius: size / 5
        };
      case 'ellipse-outline':
        return {
          width: size - size / 2,
          height: size / 8,
          borderRadius: size / 4,
          border: `${size / 10}px solid ${color}`
        };
      case 'square':
        return {
          backgroundColor: color,
          width: size / 2.5,
          height: size / 2.5
        };
      default:
        return null;
    }
  }

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


  renderIconLoader(color, size, duration, type) {
    const windowCenterHeight = `calc(50% - ${size / 2}px)`;
    const windowCenterWidth = `calc(50% - ${size / 2}px)`;
    const defaultStyle = {
      width: size / 3,
      height: size / 3,
      position: 'absolute'
    };

    const wrapperStyle = {
      position: 'relative',
      top: windowCenterHeight,
      left: windowCenterWidth,
      display: 'flex',
      animationDuration: `${duration}s`
    };

    const tmp = [];
    for (let i = 0; i < 13; i += 1) {
      tmp.push(i);
    }
    const indents = tmp.map(i => (
      <div style={
        Object.assign({ transform: `rotate(${i * 30}deg) translate(${size}px)` },
          defaultStyle,
          this.getStyle(type, color, size, i))}
      />
    ));

    let className = '';
    if (type !== 'op-dot' && type !== 'op-lines' && type !== 'opdot') {
      className = 'icon';
    } else {
      className = 'step-icon';
    }

    return (
      <div style={wrapperStyle}>
        <div className={className} style={{ animationDuration: `${duration}s` }}>
          {indents}
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

  renderColorCircleLoader(duration, primaryColor, size, spacing) {
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
      size = 40,
      duration = 1,
      spacing = 4,
      primaryColor = 'yellow',
      secondaryColor = 'green'
    } = this.props;

    switch (type) {
      case 'dot-spinner':
        return this.renderDotLoader(primaryColor, size, spacing);
      case 'zig-zag-spinner':
        return this.renderSpanCircleLoader(primaryColor, size, spacing);
      case 'color-spinner':
        return this.renderColorCircleLoader(duration, primaryColor, size, spacing, secondaryColor);
      default:
        return this.renderIconLoader(primaryColor, size, duration, type);
      // return this.renderCircleLoader(duration, type, primaryColor, size);
    }
  }

  render() {
    const {
      isLoading,
      segment = false,
      backgroundOpacity = 0.25
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
