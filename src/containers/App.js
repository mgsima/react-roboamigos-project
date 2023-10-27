import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { robots } from "../components/robots";
import { render } from "@testing-library/react";
import './App.css'

// STATE >> PROPS

// Cosas como PROPS (lo de robots) son variables que le pasamos a los componentes.

// STATE Es un objeto que describe la aplicación y contiene información sobre el estado general de la app
//State es lo que contiene las cosas que pueden cambiar



class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response=>Response.json())
            .then(users =>this.setState({robots: users}));
    }


    onSearchChange = (event)=> { // Cuando creamos componentes propias, y no los de React, hay que usar sintaxis de "=>"
        this.setState({searchfield: event.target.value}) // Esto es como se actualiza el objeto estado
    }
    render () {
        const {robots, searchfield} = this.state; // destructuramos para un código más limpio
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
    
        // La condición verifica si la longitud del array robots es 0 (es decir, si está vacío),
        // en cuyo caso muestra "Cargando", de lo contrario muestra la lista filtrada de robots.
    
        return robots.length === 0 ? 
            <h1>Cargando</h1> : 
            (
                <div className='tc'>
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                            <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );       
    }
}
    

export default App;