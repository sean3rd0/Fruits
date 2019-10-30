import React from "react"
import {connect} from "react-redux"
import {getFruit, addFruit} from "../redux/reducer"
import axios from "axios"
import IndividualFruit from "./IndividualFruit"

class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            addFruitInput: "",
            fruits: []
        }
    }

    componentDidMount(){
        axios.get('/api/fruits').then(dbResponse => {
            this.setState({
                fruits: dbResponse.data
            })
        })
        // this.props.getFruit()
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: (e.target.value)
        })
    }

    handleAddFruitButtonClick = (addFruitInput) => {
        this.props.addFruit(addFruitInput)
        this.setState({
            addFruitInput: ""
        })
    }    

    render(){
        // console.log(this.props)
        const mappedReduxStateFruitsArray = this.state.fruits.map(individualFruitObject => {
            console.log("this is the mappedReduxStateFruitsArray element:", individualFruitObject)
            return (
                <IndividualFruit 
                    key={individualFruitObject.id} 
                    name={individualFruitObject.name}
                    id={individualFruitObject.id}
                />
            )
        })
        return (
            <div>
                <h1>Favorite Fruits!</h1>
                <div>
                <input 
                    name="addFruitInput"
                    onChange={e => this.handleInputChange(e)}
                    placeholder="Add fruit here"
                ></input>
                <button 
                    onClick={() => this.handleAddFruitButtonClick(this.state.addFruitInput)}
                >Add</button>
                </div>
                {mappedReduxStateFruitsArray}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {fruits} = reduxState.reducer
    return {
        fruits: fruits
    }
} 

const mapDispatchToProps = {
    getFruit,
    addFruit
}

export default connect(mapStateToProps, {getFruit, addFruit})(Component)