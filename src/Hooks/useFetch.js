import React, { useEffect, useRef, useState } from 'react';


export default function useFetch( url ) {
    
    const [state, setState] = useState({ data: null, loading: true });

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        setState({data: null, loading: true});

        fetch(url)
        .then(resp => resp.json())
        .then(data => { 
            if(isMounted.current){
                setState({ 
                    data,
                    loading: false
                });
            } else { 
                console.log('el setSate no se llama, una sola vez');
            }
        })
    }, [url])

    return state;
}

// cgarcias@truper.com
// fmacedoniom@truper.com