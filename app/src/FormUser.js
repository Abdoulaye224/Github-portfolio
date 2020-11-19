import React from 'react'
import './form.css';

const FormUser = ({ handleSubmit, handleChecked, error}) => (
    <div id ="formAll"className=" container wrapper">
        <form onSubmit={handleSubmit}>

        <div className="input-data">
        <input type="text" name="username" required/>
        <div className="underline"></div>
        <label>github username</label>
        <button className="btn btn-primary" id="button" type="submit" value="GO !"> GO !</button>

        </div>
        <p id="check">Show only owned repositories <input type="checkbox" className="checkboxForked" onClick={handleChecked}/></p>

        { error && 
        <div className="alert alert-danger" role="alert">
            le nom d'utilisateur est incorrect, veuillez réessayer 
        </div>
        }
    </form>
    </div>
)

export default FormUser