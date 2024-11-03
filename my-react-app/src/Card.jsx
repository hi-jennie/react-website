import profilePic from './assets/profile.jpg';

function Card(){
    return (
        <div>
            <div className='card'>
                <img src={profilePic} alt="profile picture" className='profile-image'></img>
                <h2 className='card-title'>
                    Shirley Code
                </h2>
                <p className='card-text'>  this is the first website of Shirley</p>
            </div>
        </div>
        
    );
}

export default Card;