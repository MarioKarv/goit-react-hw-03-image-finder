import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick} type="button">Load more</button>
    )
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};