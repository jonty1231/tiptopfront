import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker,Popup,LayersControl} from 'react-leaflet'
import L from "leaflet"
import img from "../../public/pngg1.png"


const Map = () => {
 const ic= L.icon({
    iconUrl:img,
    iconSize: new L.Point(40, 45),
})
    const [location,setlocation]=useState({latitude:0,longitude:0})

    useEffect(()=>{
navigator.geolocation.getCurrentPosition((position)=>{setlocation({latitude:position.coords.latitude,longitude:position.coords.longitude})},()=>alert("no location"))


    },[])
  return (

    <MapContainer center={[30.436484, 77.623737]} zoom={13} scrollWheelZoom={false} className='h-screen w-screen'>
<LayersControl  />
<TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />


    <Marker position={[30.436484, 77.623737]}>
      <Popup>
       <div className='text-xl'> <div  className='text-red-800'> TIP TOP</div> Shop 👕</div>
      </Popup>
    </Marker >
     {location.latitude && <Marker position={[location.latitude,location.longitude]} icon={ic}>
      <Popup>
       <div className='text-xl'>Owner</div>
      </Popup>
    </Marker>}
  </MapContainer>
  )
}

export default Map