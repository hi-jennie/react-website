import PropTypes from 'prop-types';

function Student(props) {
  return (
    <div className='family'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Relation: {props.relation}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  relation: PropTypes.string.isRequired
};

Student.defaultProps = {
  name: 'Guest',
  age: 0,
  relation: 'No'
}
export default Student;