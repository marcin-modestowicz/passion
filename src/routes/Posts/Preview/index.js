import { connect } from "react-redux";

import Preview from "./Preview";
import { getLoading, getPostById } from "../../../services/posts/selectors";

const mapStateToProps = (
  state,
  {
    match: {
      params: {
        id
      }
    },
  }
) => ({
  post: getPostById(id)(state),
  loading: getLoading(state),
});

export default connect(mapStateToProps)(Preview);
