import './ChildHooker.css';
import React, { useState, useEffect } from 'react';
import JokeApiResponse from './JokeApiResponse';
import DogApiResponse from './DogApiResponse';

function ChildHooker() {
    const [dog, setDog] = useState();
    const [joke, setJoke] = useState();

    // This useEffect will fetch a dog photo once in every 15 seconds using setTimeout function:
    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('useEffect did not manage to fetch data from server!');
                }})
            .then(data => {
                console.log(data);
                setDog(new DogApiResponse(data.message, data.status, getBreedFromDogApiResponseMessage(data.message)));
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {});
        }

        const timer = setTimeout(() => {
            fetchData();
        }, 15000);

        return () => clearTimeout(timer);
    }) // }, ??) ?? missing dependency parameter will lead to infinite execution.

    // This useEffect will fetch a random joke only once due to [] dependency paramter:
    useEffect(() => {
            fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('useEffect did not manage to fetch data from server!');
                }})
            .then(data => {
                console.log(data);
                setJoke(new JokeApiResponse(data.id, data.type, data.setup, data.punchline));
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {});
        }, []) // [] as a dependency parameter will limit the execution to 1.

    function getBreedFromDogApiResponseMessage(message) {
        try {
            let breed = message.replace('https://images.dog.ceo/breeds/', '');
            return breed.substring(0, breed.indexOf("/"));
        } catch {
            return undefined;
        }
    }

    return (
        <div className="row bg-success text-light m-3">
            <div className="col-md-12 p-3">
                <h4 className="display-4 d-flex justify-content-center">ChildHooker</h4>
                {dog && <div><p className="d-flex justify-content-center">Random dog photo fetched once in every 15 seconds from dog.ceo/api (<b className="text-warning">useEffect&nbsp;</b> hook + setTimeout):</p><div className="d-flex justify-content-center"><img src={dog.message} alt="dog" className="img-max img-thumbnail" /></div>{dog.breed && <p className="d-flex justify-content-center">{dog.breed}</p>}</div>}
                {dog && joke && <hr/>}
                {joke && <div><p className="d-flex justify-content-center">Random joke fetched exactly once from official-joke.api (<b className="text-warning">useEffect&nbsp;</b> hook + [] for dependency):</p><p className="display-5 d-flex justify-content-center">- {joke.setup}</p><p className="display-6 d-flex justify-content-center"> - {joke.punchline}</p></div>}
            </div>
        </div>
    )
}

export default ChildHooker;