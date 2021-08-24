import { connect } from "react-redux";

import SelectOrder from "./SelectOrder";
import { sortPosts } from "../../services/posts/actions";

const mapDispatchToProps = {
  onOrderChange: sortPosts,
};

export default connect(null, mapDispatchToProps)(SelectOrder);
