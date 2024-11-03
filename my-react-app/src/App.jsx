import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Family from "./Family.jsx";
import UserGreeting from "./UserGreeting.jsx";

function App() {

    return (
        <>  
            <UserGreeting isLoggedIn={false} userName='Shirley'/>
            <Family name="Shirley" age={24} relation='Mom'/>
            <Family name="Rustin" age={27} relation='Dad'/>
            <Family name="Aaoby" age={24} relation='Son'/>
            <Family name="Turkey" age={24} relation='Son'/>
            <Button/>
            <Card/>
            <Card/>
            <Card/>
            <Header></Header>
            <Food/>
            <Footer/>
        </>
        
        // <Header/> shorthand for <Header></Header>
    );
}

export default App
