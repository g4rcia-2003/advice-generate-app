import styled from 'styled-components'

export const Button = styled.button`
	background-color: ${props => props.theme.neon_green};
	padding: 1.25rem;
	border: none;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: -2.25rem;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		box-shadow: 0px 0px 15px 5px ${props => props.theme.neon_green};
	}
`
