import * as React from 'react'

import './SearchField.scss'

interface IProps {
  result?: string,
}

interface IState {
  searchValue?: string
}

class FindField extends React.PureComponent<IProps, IState> {
  public state = {
    searchValue: '',
  }

  private onChangeSearchValue = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget

    this.setState({
      searchValue: value,
    })
  }

  public render() {
    const { searchValue } = this.state

    return (
      <div styleName="search-field-wrapper">
        <div styleName="search-field">
          <input
            value={searchValue}
            placeholder="Введите адрес или номер телефона"
            onChange={this.onChangeSearchValue}
          />
          <button>
            Найти
          </button>
        </div>
      </div>
    )
  }
}

export default FindField
