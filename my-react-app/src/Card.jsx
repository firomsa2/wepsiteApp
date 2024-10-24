import profilePic from './assets/h.jpg'

function Card() {

  return(
    <div className='card'>
      <img className='card-image' src={profilePic}></img>
      <h1 className='card-title'>Bro code</h1>
      <p className='card-text'>I am developer and great electrical engneer </p>
    </div>
  );
}

export default Card