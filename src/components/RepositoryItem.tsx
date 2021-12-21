interface RepositoryItemProps {
	repository: {
		name: string
		description: string
		html_url: string
	}
}

export function RepositoryItem(props: RepositoryItemProps) {
	const { repository } = props

	return (
		<li>
			<strong>{repository?.name ?? 'Nome Padrão'}</strong>

			<p>{repository?.description ?? 'Descrição Padrão'}</p>

			<a href={repository?.html_url ?? 'https://google.com'} target='_blank'>
				Acessar repositório
			</a>
		</li>
	)
}
