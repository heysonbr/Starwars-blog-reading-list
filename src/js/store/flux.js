const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
    },
    actions: {
      getCharacters: async () => {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        try {
          const response = await fetch(
            "https://www.swapi.tech/api/people?page=1",
            requestOptions
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json(); // Convierte la respuesta en JSON

          // Hacer solicitudes adicionales para obtener detalles de cada personaje
          const characterDetailsPromises = data.results.map(
            (character) =>
              fetch(character.url)
                .then((res) => res.json())
                .then((data) => data.result.properties) // Accede a result.properties
          );

          const charactersWithDetails = await Promise.all(
            characterDetailsPromises
          );

          console.log(charactersWithDetails); // Imprime los datos en la consola

          return charactersWithDetails; // Devuelve los datos
        } catch (error) {
          console.error(error); // Imprime el error en la consola
        }
      },
      getPlanets: async () => {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        try {
          const response = await fetch(
            "https://www.swapi.tech/api/planets?page=1",
            requestOptions
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json(); // Convierte la respuesta en JSON

          // Hacer solicitudes adicionales para obtener detalles de cada personaje
          const planetDetailsPromises = data.results.map(
            (planet) =>
              fetch(planet.url)
                .then((res) => res.json())
                .then((data) => data.result.properties) // Accede a result.properties
          );

          const planetsWithDetails = await Promise.all(planetDetailsPromises);

          console.log(planetsWithDetails); // Imprime los datos en la consola

          return planetsWithDetails; // Devuelve los datos
        } catch (error) {
          console.error(error); // Imprime el error en la consola
        }
      },
      getVehicles: async () => {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        try {
          const response = await fetch(
            "https://www.swapi.tech/api/vehicles?page=1", // Cambia 'planets' por 'vehicles'
            requestOptions
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json(); // Convierte la respuesta en JSON

          // Hacer solicitudes adicionales para obtener detalles de cada vehículo
          const vehicleDetailsPromises = data.results.map(
            (vehicle) =>
              fetch(vehicle.url)
                .then((res) => res.json())
                .then((data) => data.result.properties) // Accede a result.properties
          );

          const vehiclesWithDetails = await Promise.all(vehicleDetailsPromises);

          console.log(vehiclesWithDetails); // Imprime los datos en la consola

          return vehiclesWithDetails; // Devuelve los datos
        } catch (error) {
          console.error(error); // Imprime el error en la consola
        }
      }, // Cierre de getVehicles
      addFavorite: (favorite) => {
        const store = getStore();
        if (!store.favorites.includes(favorite)) {
          setStore({ favorites: [...store.favorites, favorite] });
        }
      }, //Cierre de addFavorite
      removeFavorite: (favorite) => {
        const store = getStore();
        const updatedFavorites = store.favorites.filter(
          (fav) => fav !== favorite
        );
        setStore({ favorites: updatedFavorites });
      }, //Cierre de removeFavorite
    }, // Cierre de actions
  }; // Cierre de return
}; // Cierre de getState

export default getState;
