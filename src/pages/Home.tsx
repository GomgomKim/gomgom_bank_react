import '../styles/home.scss';
import Button from '../components/Button';

function Home() {

  const getAuth = () => {

  }

  return (
    <>
      <Button className="btn-get-auth"
        onClick={getAuth}
      >
        인증
      </Button>
      <div className="center">
        <img className="main-ico" src={'/images/bear.png'} alt='gom' />
        <h3 className="main-text">Gomgom Bank</h3>
      </div>
    </>
  );
}

export default Home;