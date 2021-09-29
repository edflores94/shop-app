import PropTypes from "prop-types";

FormError.propTypes = {
  errors: PropTypes.object,
  errText: PropTypes.string
};

export default function FormError(props) {
  return props.errText ? <a className={"errors"}>{props.errText}</a> : null;
}
