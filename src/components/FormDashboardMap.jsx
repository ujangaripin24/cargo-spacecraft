import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import {IoLogoDropbox} from 'react-icons/io5'
import 'leaflet/dist/leaflet.css'

function FormDashboardMap() {
  return (
    <div>
        <h1 className="title"><IoLogoDropbox/> Map</h1>
        <div className="card has-shadow">
            <div className="card-content">
                <div className="content">
                    <MapContainer style={{ height: "450px", width: "100%" }}center={[51.505, -0.09]} zoom={19}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormDashboardMap