import React from "react";

class List extends React.Component {
  renderItems = () => {
    const { data, component, keyName } = this.props;
    return data.map((item, id) =>
      React.createElement(component, { ...item, key: item[keyName] || id })
    );
  };

  render() {
    const { loading } = this.props;

    return (
      <div className="list">{loading ? "Loading..." : this.renderItems()}</div>
    );
  }
}

List.defaultProps = {
  data: []
};

export default List;
