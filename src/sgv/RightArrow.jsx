import PropTypes from 'prop-types';

const RightArrow = ({ className }) => {
  return (
    <svg
      className={className}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m9 5 7 7-7 7'
      />
    </svg>
  );
};

RightArrow.propTypes = {
  className: PropTypes.string.isRequired,
};

export default RightArrow;
