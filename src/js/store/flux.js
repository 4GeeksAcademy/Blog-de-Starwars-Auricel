const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [

			],
			favoritos: [],
			people: [],
			planets: [],
			vehicles: [],
		},
		actions: {

			getPeople: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people")
					const data = await response.json()
					console.log(data)
					const { getDetalles } = getActions()
					//getDetalle(data.results)
					const personajes = data.results.map(async (persona) => {
						//getDetalle(persona.url)
						return await getDetalles(persona.url)
					})
					console.log(personajes)
					setStore({ people: await Promise.all(personajes) })

				} catch (error) {
					console.log(error)
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/")
					const data = await response.json()
					const { getDetalles } = getActions()
					//getDetalle(data.results)
					const planetas = data.results.map(async (planeta) => {
						//getDetalle(persona.url)
						return await getDetalles(planeta.url)
					})
					console.log(planetas)
					setStore({ planets: await Promise.all(planetas) })

				} catch (error) {

				}

			},
			getVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/")
					const data = await response.json()
					const { getDetalles } = getActions()
					//getDetalle(data.results)
					const vehiculos = data.results.map(async (vehiculo) => {
						//getDetalle(persona.url)
						return await getDetalles(vehiculo.url)
					})
					console.log(vehiculos)
					setStore({ vehicles: await Promise.all(vehiculos) })

				} catch (error) {

				}

			},

			// Funcion para extraer los detalles 
			getDetalles: async (urldetalle) => {

				try {
					const response = await fetch(urldetalle)
					const data = await response.json()
					console.log(data)

					return data.result
				} catch (error) {
					console.log(error)
				}


			},

			añadirEliminarFavoritos: (item) => {
				const store = getStore();
				const { favoritos } = store; // Desestructuración
				console.log('Favoritos actuales:', favoritos);
				if (
					//El .some itera sobre el array el string que estoy comparando, si encuentra sera True sino es False
					favoritos.some(fav => fav === item)
				) {
					setStore({
						favoritos: favoritos.filter(
							(favorito) => {
								return favorito !== item
							}
						)
					})
					return
				}

				favoritos.push(item)
				console.log(favoritos)
				setStore({ favoritos: favoritos })
			},

			eliminarFavorito: (name) => {
				const store = getStore();
				const favoritos = store.favoritos;

				const index = favoritos.indexOf(name);
				if (index == -1) {
					return;
				}
				favoritos.splice(index, 1);
				setStore({ favoritos: favoritos });
			},




		},




	}
};


export default getState;
