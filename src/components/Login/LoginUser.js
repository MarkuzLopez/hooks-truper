import React, { useState } from 'react';
import { useForm } from '../../Hooks/useForm';
import { withRouter } from 'react-router-dom';

const LoginUser = (props) => {

    const [values, setOnchangeValues] =  useForm({
        user: 'marco',
        password: '123456'
    });

    const { user, password } =  values;

    const onSubmitForm = (e) => { 
        e.preventDefault();
        props.history.push('/home');
    }

    return (
        <>
        <form onSubmit={onSubmitForm} >
            <h1 className="text-star">Login</h1>
            <div className="form-group mt-3">
                <input
                type="text"
                name="user"
                className="form-control"
                placeholder="Ingresa el usuario"
                autoComplete="off"
                value={user}
                onChange={setOnchangeValues}
                />
            </div>

            <div className="form-group mt-3">
                <input
                type="password"
                name="password"
                className="form-control"
                placeholder="******"
                autoComplete="off"
                value={password}
                onChange={setOnchangeValues}
                />
            </div>

            <button className="btn btn-primary mt-3" type="submit">Enviar</button>
        </form>
        </>
     );
}
 
export default withRouter (LoginUser);