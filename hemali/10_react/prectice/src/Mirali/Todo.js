import React, { useState, useEffect, useRef } from "react";

const ParlorForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    street_address: "",
    city: "",
    state: "",
    zip_code: "",
    googleMapLink: "",
  });

  const [selectedLocation, setSelectedLocation] = useState({
    lat: null,
    lng: null,
  });

  const autocompleteRef = useRef(null);
  const autocompleteInstance = useRef(null);
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerInstance = useRef(null);

  const loadGoogleMapsScript = (apiKey, onLoad) => {
    if (document.querySelector(`script[src="https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places"]`)) {
      // Script already exists, call onLoad directly
      onLoad();
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onerror = () => console.error("Failed to load Google Maps script.");
    script.onload = onLoad;
    document.body.appendChild(script);
  };

  useEffect(() => {
    const handlePlaceSelect = () => {
      if (autocompleteInstance.current) {
        const place = autocompleteInstance.current.getPlace();
        const addressComponents = place.address_components || [];

        setFormState({
          name: place.name || "",
          street_address: `${addressComponents[0]?.long_name || ""} ${
            addressComponents[1]?.long_name || ""
          }`,
          city:
            addressComponents.find((c) => c.types.includes("locality"))
              ?.long_name || "",
          state:
            addressComponents.find((c) =>
              c.types.includes("administrative_area_level_1")
            )?.short_name || "",
          zip_code:
            addressComponents.find((c) => c.types.includes("postal_code"))
              ?.short_name || "",
          googleMapLink: place.url || "",
        });

        // Set the selected location's latitude and longitude
        const location = place.geometry?.location;
        if (location) {
          const lat = location.lat();
          const lng = location.lng();
          setSelectedLocation({ lat, lng });

          // Initialize or update the map
          if (mapInstance.current) {
            mapInstance.current.setCenter({ lat, lng });
            if (markerInstance.current) {
              markerInstance.current.setPosition({ lat, lng });
            } else {
              markerInstance.current = new window.google.maps.Marker({
                position: { lat, lng },
                map: mapInstance.current,
              });
            }
          } else {
            mapInstance.current = new window.google.maps.Map(mapRef.current, {
              center: { lat, lng },
              zoom: 14,
            });
            markerInstance.current = new window.google.maps.Marker({
              position: { lat, lng },
              map: mapInstance.current,
            });
          }
        }
      }
    };

    const initAutocomplete = () => {
      if (window.google && window.google.maps) {
        autocompleteInstance.current = new window.google.maps.places.Autocomplete(
          autocompleteRef.current
        );
        autocompleteInstance.current.addListener(
          "place_changed",
          handlePlaceSelect
        );
      }
    };

    loadGoogleMapsScript(
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      initAutocomplete
    );

    return () => {
      if (autocompleteInstance.current) {
        window.google.maps.event.clearInstanceListeners(
          autocompleteInstance.current
        );
      }
      if (markerInstance.current) {
        markerInstance.current.setMap(null);
      }
      if (mapInstance.current) {
        mapInstance.current = null;
      }
    };
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="px-48 py-14">
      <div className="w-full mx-auto p-6 py-10 bg-gray-100 shadow-lg rounded-lg">
        <form className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="location"
              className="text-base font-medium text-gray-800 mb-1"
            >
              Location
            </label>
            <input
              type="text"
              id="autocomplete"
              name="location"
              ref={autocompleteRef}
              className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter location"
            />
          </div>

          {/* Other form fields for name, street, city, state, zipcode */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-800 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="flex flex-col">
            <label
              htmlFor="street"
              className="text-base font-medium text-gray-800 mb-1"
            >
              Street
            </label>
            <input
              type="text"
              name="street_address"
              value={formState.street_address}
              onChange={handleChange}
              className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="city"
                className="text-base font-medium text-gray-800 mb-1"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                value={formState.city}
                onChange={handleChange}
                className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter city"
              />
            </div>

            <div className="flex flex-col flex-1">
              <label
                htmlFor="state"
                className="text-base font-medium text-gray-800 mb-1"
              >
                State
              </label>
              <input
                type="text"
                name="state"
                value={formState.state}
                onChange={handleChange}
                className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter state"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="zipcode"
              className="text-base font-medium text-gray-800 mb-1"
            >
              Zipcode/Pincode
            </label>
            <input
              type="text"
              name="zip_code"
              value={formState.zip_code}
              onChange={handleChange}
              className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Zipcode"
            />
          </div>
        </form>
      </div>

      {/* Map Container */}
      <div ref={mapRef} className="w-full h-64 mt-6 bg-gray-200 rounded-lg shadow-lg" />
    </div>
  );
};

export default ParlorForm;
