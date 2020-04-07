import React, { Component } from 'react';
class InputSlider extends Component {
  state = {
    value: this.props.value,
    id: this.props.id,
    min: this.props.min,
    max: this.props.max,
    step: this.props.step,
    className: this.props.className,
    disabled: this.props.disabled,
  }
  
  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
        const _R = document.querySelector('[type=range]');

    document.documentElement.classList.add('js');

    _R.addEventListener('input', e => {
      _R.style.setProperty('val', +_R.value);
    }, false);
  }
  render() {
    const { id, value, size, min, max, step, ...inputProps } = this.props
    return (
      <>
        <div className={`${this.state.className ? this.state.className : ''} range-slider`}>
          <label>
            {this.state.className !== "double-range-slider" ? 
              <>
                <input type="range" min={this.state.min} disabled={this.state.disabled} className={this.state.className} max={this.state.max} defaultValue={this.state.value} onChange={this.handleOnChange} step={this.state.step} />
              </>
            : this.state.className == "range-slider"}
            {this.state.className == "double-range-slider" ? 
              <>
                 <input id="min" type="range" min={this.state.min} disabled={this.state.disabled} className={this.state.className} max={this.state.max} defaultValue={this.state.value} onChange={this.handleOnChange} step={this.state.step} />
                <input id="max" type="range" min={this.state.min} disabled={this.state.disabled} className={this.state.className} max={this.state.max} defaultValue={this.state.value} onChange={this.handleOnChange} step={this.state.step} /> 
                </>
            : this.state.className == ''}
            {/* <span className="fill" style={{width: this.state.value + '%'}}></span><span>{this.state.value}</span> */}
          </label>
        </div>
      </>
    );
  }
}

export default InputSlider;