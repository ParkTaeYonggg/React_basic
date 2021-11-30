import React from 'react';

class ShoppingList extends React.Component {
    render() {
        return (
            <div>
                <h1>쇼핑리스트 - {this.props.name}</h1>
                <ul>
                    <li>인스타그램</li>
                    <li>뭐살까?</li>
                    <li>오큘러스</li>
                </ul>
            </div>

        );
    }
}
export default ShoppingList;