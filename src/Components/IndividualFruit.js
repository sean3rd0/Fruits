import React from "react"
import {connect} from "react-redux"
import {editFruit, deleteFruit} from "../redux/reducer"
import axios from "axios";

class IndividualFruit extends React.Component{
    constructor(){
        super()
        this.state = {
            editFruitInput: "", 
            editFruit: false
        }

        this.handleEditButtonClick = this.handleEditButtonClick.bind(this)
        this.handleEditFruitInputChange = this.handleEditFruitInputChange.bind(this)
        this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)
    }
    handleEditButtonClick () {
        this.setState({
            editFruit: (!this.state.editFruit)
        })
    }

    handleEditFruitInputChange(e) {
        this.setState({
            editFruitInput: e.target.value
        })
    }

    handleSubmitButtonClick(){
        axios.put(`/api/fruits/${this.props.id}`, {name: `${this.state.editFruitInput}`})
        .then(response => {
            // console.log("THIS IS THE RESPONSE:", response)
            this.props.editFruit(response.data)
            this.setState({
                editFruit: (!this.state.editFruit)
            })
        })  
    }

    // handleDeleteButtonClick(){
        
    // }
    
    render(){
        // console.log("THIS IS THIS.PROPS.ID:", this.props.id)
        // console.log("THIS IS DELETEFRUIT:", deleteFruit)
        if (this.state.editFruit) {
            return (
                <div>
                    <input onChange={e => this.handleEditFruitInputChange(e)} />
                    <button onClick={this.handleSubmitButtonClick}>submit</button>
                </div>  
            )
        } 
        return (
            <div>
                <h2>{this.props.name}</h2>
                <div>
                    <button onClick={this.handleEditButtonClick}>edit</button>
                    <button onClick={() => this.props.deleteFruit(this.props.id)}>delete</button>
                    {/* when you're passing in a parameter, you are invoking the function^. so, make it an arrow function so it doesn't immediately invoke until you click the button. */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {fruits} = reduxState.reducer
    return {
        fruits
    }
}

const mapDispatchToProps = {
    editFruit, 
    deleteFruit
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualFruit)