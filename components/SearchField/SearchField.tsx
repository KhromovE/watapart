import * as React from 'react'

import './SearchField.scss'

interface IProps {
  result?: string,
}

interface IState {
  searchValue: string
}

class FindField extends React.PureComponent<IProps, IState> {
  public state = {
    searchValue: '',
  }

  public render() {
    return (
      <div styleName="search-field-wrapper">
        <input styleName="search-field-wrapper_search-field" />
      </div>
    )
  }
}

export default FindField
