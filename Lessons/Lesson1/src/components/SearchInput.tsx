import React, { Component } from "react";

export class SearchInput extends Component<{ onSearch: (searchText: string) => void }> {
    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.props.onSearch(e.target.value)} />
            </div>
        );
    }
}

export default SearchInput;
