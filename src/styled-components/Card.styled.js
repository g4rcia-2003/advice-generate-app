import styled from 'styled-components'

export const Card = styled.div`
	background-color: ${props => props.theme.dark_grayish_blue};
	color: ${props => props.theme.light_cyan};
	border-radius: 0.6rem;
	position: relative;
	padding: 2.46rem 1.5rem 3rem;
	width: 92%;
	max-width: 33.7em;

	& h1 {
		color: ${props => props.theme.neon_green};
		font-size: 0.75rem;
		text-transform: uppercase;
		margin-bottom: 1.4rem;
		letter-spacing: 0.18rem;
	}

	& p {
		font-size: 1.48em;
		color: ${props => props.theme.light_cyan};
		line-height: 1.41;
		padding-bottom: 1.45rem;
	}

	@media screen and (min-width: 500px) {
		padding: 3.05em 3em 4em;

		& p {
			font-size: 1.7em;
		}
	}
`
