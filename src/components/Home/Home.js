import React from 'react';
import enviroments from '../../constants/enviroments';
import useFetch from '../../Hooks/useFetch';
import Card from './Card';

const Home = () => {

    let baseURL = enviroments.apiUrl;

    const { loading, data } = useFetch(`${baseURL}/calidadAire`);

    return (
        <>
            <h1>Welcome Home </h1>
            <hr />
            { loading ? 
                (<div className="alert alert-info text-center" >
                    loading...
                </div>) 
                :
                <Card results={data.results} />
            }
        </>
    );
}

export default Home;