import PropTypes from 'prop-types';

const Carousel2Item = ({ data }) => {
  return (
    <div className='carousel_item'>
      <div></div>
      <img className='carousel_image' src={data.imgUrl} alt={data.titke} />
      <div className='carousel_title'>{data.title}</div>
    </div>
  );
};

Carousel2Item.propTypes = {
  data: PropTypes.object,
};
export default Carousel2Item;
