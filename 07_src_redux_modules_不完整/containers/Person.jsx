import { connect } from "react-redux";

import Person from "../components/Person";

import { addPerson } from "../redux/actions/person";

export default connect(
  state => ({
    persons:state.persons,
    number:state.number
  }),
  {addPerson}
)(Person)