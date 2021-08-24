import { connect } from "react-redux";

import Preview from "./Preview";
import { getPostById } from "../../../services/posts/selectors";

const mapStateToProps = (
  state,
  {
    location: {
      search: { id }
    }
  }
) => ({
  post: getPostById(id)(state)
});

export default connect(mapStateToProps)(Preview);
