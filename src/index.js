import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App.js';

function RandomBeer(){
    const [name, setName] = useState()
    const [volumeValue, setVolumeValue] = useState()
    const [volumeUnit, setVolumeUnit] = useState()

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers/random')
        .then(result => results.json())
        .then(data => {
            setName(data[0].name)
            const {volume} = data[0]
            setVolumeValue(volume.value)
            setVolumeValue(volume.unit)
        })
    }, [])
}

ReactDOM.render(
    RandomBeer({name}: {volumeValue} {volumeUnit}),
    document.getElementById('app')
);