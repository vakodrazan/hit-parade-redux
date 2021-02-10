import { connect } from "react-redux";
import Song from "../components/Song";

export default connect((state) => ({songList: state.songList}), null)(Song)