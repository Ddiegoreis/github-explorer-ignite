export function RepositoryItem(props) {
	const { repository } = props

	return (
		<li>
			<strong>{repository?.name ?? 'Nome Padrão'}</strong>

			<p>{repository?.description ?? 'Descrição Padrão'}</p>

			<a href={repository?.link ?? 'https://google.com'}>Acessar repositório</a>
		</li>
	)
}
