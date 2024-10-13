import React, { useEffect, useState } from 'react';

const localChace = {};


export const useFetch = ( url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }
    useEffect(() => {
        getFetch();

    }, [url]);

    const getFetch = async () => {

        setLoadingState();

        if (localChace[url]) {
            console.log('Usando caché');
            setState ({
                data: localChace[url],
                isLoading: false,
                hasError: false,
                error: null
            })
        }

        const resp = await fetch(url);

        // Sleep
        await new Promise( resolve => setTimeout(resolve, 1000));

        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return;
        }
        
        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        // Manejo del caché
        localChace[url] = data;
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
