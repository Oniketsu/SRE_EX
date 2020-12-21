import react, { useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

function RandomBeer(){
    const [name, setName] = useState()
    const [volumeValue, setVolumeValue] = useState()
    const [volumeUnit, setVolumeUnit] = useState()
    const

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

return(
    <div>
    {name}: {volumeValue} {volumeUnit} {}
    </div>
)


}

ReactDOM.render(
    <RandomBeer/>
    document.getElementById('root')
)