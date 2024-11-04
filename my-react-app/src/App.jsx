import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Family from "./Family.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {

    const fruits = [{id: 1, name: 'apple', calories: 95},
        {id: 2, name: 'banana', calories: 105},
        {id: 3, name: 'orange', calories: 62},
        {id: 4, name: 'grapes', calories: 69},
        {id: 5, name: 'kiwi', calories: 42},
        {id: 6, name: 'strawberry', calories: 4}];

    const vegetables = [{id: 1, name: 'carrot', calories: 41},
                        {id: 2, name: 'broccoli', calories: 55},
                        {id: 3, name: 'spinach', calories: 23},
                        {id: 4, name: 'lettuce', calories: 5},
                        {id: 5, name: 'cucumber', calories: 16},
                        {id: 6, name: 'tomato', calories: 22}];

    return (
        <>     
            {fruits.length>0 && <List category='Fruit'/>}
            {fruits.length>0 && <List items={fruits} category='Fruit'/>}
            {vegetables.length> 0 && <List items={vegetables} category='Vegetables'/>}
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
