import React, { Component} from 'react';

class App extends Component {
    RandomBeer(){
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
        return <div>{name}: {volumeValue}{volumeUnit}</div>
    }
}

export default App;