
function ProfilePicture() {
    const imageUrl = './src/assets/profile.jpg';

    const handleClick = (e) => e.target.style.display = 'none';
    return (
        <img className='profile-image' onClick={(e) => handleClick(e)} src={imageUrl}/>
    );
}

export default ProfilePicture;