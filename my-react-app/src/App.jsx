import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";

function App() {

    return (
        <>  
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
