import { useState, useEffect } from 'react'

import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

const repository = {
	name: 'Item 1',
	description: 'Descrição do item 1',
	link: 'https://github.com/Ddiegoreis/',
}

export function RepositoryList() {
	const [repositories, setRepositories] = useState([])

	useEffect(() => {
		fetch('https://api.github.com/users/Ddiegoreis/repos')
			.then((response) => response.json())
			.then((data) => setRepositories(data))
	}, [])

	return (
		<section className='repository-list'>
			<h1>Lista de repositórios</h1>

			<ul>
				<RepositoryItem repository={repository} />
				<RepositoryItem />
				<RepositoryItem />
			</ul>
		</section>
	)
}
