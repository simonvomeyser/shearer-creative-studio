// @ts-nocheck
import {globalData} from "../../data/global";
import googleMapConfig from "./googleMapConfig";

function addGoogleMapScript(doneCallback: () => void) {

    window.initMap = () => {
        doneCallback();
    }

    const script = document.createElement('script');
    script.setAttribute('src',
        `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=initMap`
    );

    document.head.appendChild(script);

}

export const createGoogleMap = (id) => {

    addGoogleMapScript(() => {

        const map = new window.google.maps.Map(
            document.getElementById(id),
            googleMapConfig
        );

        const marker = new google.maps.Marker({
            position: globalData.location,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: '/google-maps-marker.png',
            title: 'Shearer Creative Studio'
        });

        google.maps.event.addListener(marker, 'click', function () {
            window.open(globalData.googleMapsLink, '_blank');
        });
    })
}
