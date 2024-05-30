const { inquirerMenu, leerInput, pausa } = require('./helpers/inquirer')
const Busquedas = require('./models/busquedas')

const main = async () => {
	let opt

	const busqueda = new Busquedas()

	do {
		opt = await inquirerMenu()

		switch (opt) {
			case 1:
				// Mostrar Lugares
				const lugar = await leerInput('Ciudad: ')
				console.log(lugar)
				// Buscar los lugares
				// Seleccionar el lugar
				// Clima
				// Mostrar resultados
				console.log('\nInformación de la ciudad\n'.green)
				console.log('Ciudad:')
				console.log('Lat:')
				console.log('Lng: ')
				console.log('Temperatura: ')
				console.log('Min: ')
				console.log('Max: ')

				break
			case 2:
				break
			case 0:
				break
		}
		if (opt !== 0) await pausa()
	} while (opt !== 0)
}

main()
