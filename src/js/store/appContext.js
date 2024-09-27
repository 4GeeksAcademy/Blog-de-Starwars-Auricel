import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// Esta función inyecta el almacén global a cualquier vista/componente donde quieras usarlo, inyectaremos el contexto a layout.js, puedes verlo aquí:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//Esto se pasará como valor de contexto.
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 *
			 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
			 *
			 **/
			state.actions.getPeople()
			state.actions.getPlanets()
			state.actions.getVehicles()
		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
