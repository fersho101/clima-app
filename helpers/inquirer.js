require('colors')
const inquirer = require('inquirer')

const preguntas = [
	{
		type: 'list',
		name: 'opcion',
		message: '¿Que desea hacer?',
		choices: [
			{
				value: 1,
				name: `${'1.'.green} Buscar ciudad`,
			},
			{
				value: 2,
				name: `${'2.'.green} Historial`,
			},
			{
				value: 0,
				name: `${'0.'.green} Salir`,
			},
		],
	},
]

const inquirerMenu = async () => {
	console.clear()
	console.log('==========================='.green)
	console.log('  Seleccione una opcion:'.white)
	console.log('===========================\n'.green)

	const { opcion } = await inquirer.prompt(preguntas)
	return opcion
}

const pausa = async () => {
	const pregunta = [
		{
			type: 'input',
			name: 'eneter',
			message: `\nPresione ${'ENTER'.green} para continuar`,
		},
	]
	console.log('\n')
	await inquirer.prompt(pregunta)
}

const leerInput = async message => {
	const pregunta = [
		{
			type: 'input',
			name: 'desc',
			message,
			validate(value) {
				if (value.length === 0) {
					return 'Por favar ingrese un valor'
				}
				return true
			},
		},
	]
	const { desc } = await inquirer.prompt(pregunta)
	return desc
}

const listadoTareasBorrar = async (tareas = []) => {
	const choices = tareas.map((tarea, i) => {
		const idx = `${i + 1}.`.green
		return {
			value: tarea.id,
			name: `${idx} ${tarea.desc}`,
		}
	})
	choices.unshift({
		value: '0',
		name: '0.'.green + ' Cancelar',
	})
	const preguntas = [
		{
			type: 'list',
			name: 'id',
			message: 'Borrar',
			choices,
		},
	]
	const { id } = await inquirer.prompt(preguntas)
	return id
}

const mostrarListadoCheckList = async (tareas = []) => {
	const choices = tareas.map((tarea, i) => {
		const idx = `${i + 1}.`.green
		return {
			value: tarea.id,
			name: `${idx} ${tarea.desc}`,
			checked: tarea.completadoEn ? true : false,
		}
	})
	const pregunta = [
		{
			type: 'checkbox',
			name: 'ids',
			message: 'Seleccione',
			choices,
		},
	]
	const { ids } = await inquirer.prompt(pregunta)
	return ids
}

const confirmar = async message => {
	const pregunta = [
		{
			type: 'confirm',
			name: 'OK',
			message,
		},
	]
	const { ok } = await inquirer.prompt(pregunta)
	return ok
}

module.exports = {
	inquirerMenu,
	pausa,
	leerInput,
	listadoTareasBorrar,
	mostrarListadoCheckList,
	confirmar,
}
