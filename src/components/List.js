import React from "react";

class List extends React.Component {
  scrollOffset = 200;
  onScrollEndListHeight = 0;

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  componentDidMount() {
    this.listRef.current.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.listRef.current.removeEventListener('scroll', this.handleScroll);
  }

  renderItems = () => {
    const { data, component, keyName } = this.props;

    return data.map((item, id) =>
      React.createElement(component, { ...item, key: item[keyName] || id })
    );
  };

  handleScroll = event => {
    const {scrollHeight, scrollTop, clientHeight} = event.target;

    if (!this.props.loading && this.onScrollEndListHeight !== scrollHeight && scrollTop + clientHeight + this.scrollOffset > scrollHeight) {
      this.onScrollEndListHeight = scrollHeight;
      this.props.onScrollEnd();
    }
  }

  render() {
    const { loading, data } = this.props;

    return (
      <div className="list" ref={this.listRef}>
        {loading && !data.length && 'Loading...'}
        {data.length && this.renderItems()}
      </div>
    );
  }
}

List.defaultProps = {
  data: []
};

export default List;
