import PropTypes from 'prop-types'; 
function UserGreeting(props) {
    const welcomeMessage = <h2 className='welcome-message'>
                            Welcome, {props.userName}!
                            </h2>
    const loginPrompt = <h2 className='login-prompt'>
                        Please log in.
                        </h2>
    
    return (props.isLoggedIn ? welcomeMessage : loginPrompt);

}

UserGreeting.propTypes= {
    isLoggedIn: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: 'Guest'
}
export default UserGreeting;