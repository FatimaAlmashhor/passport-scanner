import React from 'react';
import './style.scss';
import { translate } from 'src/i18n';

interface IProps {
  disabled: boolean;
}

export class SearchButton extends React.PureComponent<IProps> {

  public render() {
    return (
      <button
        type='submit'
        disabled={this.props.disabled}
        className='mh-btn search-button'
      >
        <span className='search-text'>{translate(t => t.common.load)}</span>
      </button>
    );
  }
}