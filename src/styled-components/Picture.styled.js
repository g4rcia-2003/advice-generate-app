import styled from 'styled-components'
import mobile from '../../public/images/pattern-divider-mobile.svg'
import desktop from '../../public/images/pattern-divider-desktop.svg'

export const Picture = styled.div`
	width: 100%;
	height: 0.99em;
	background-image: url(${mobile});
	background-repeat: no-repeat;
	background-position: center;
	margin-bottom: 0.8em;

	@media screen and (min-width: 375px) {
		background-image: url(${desktop});
		margin: 1em 0 0.4em;
	}
`
