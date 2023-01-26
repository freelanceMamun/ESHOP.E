import Spinner from 'react-bootstrap/Spinner';

function LoaderSpinner() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: '90vh',
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoaderSpinner;
