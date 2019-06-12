import React from 'react'
import styled from '@emotion/styled'

const Overlay = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 9999;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #11121D;

	p {
		padding: 15px;
		color: #19EEFF;
		font-size: 28px;
		font-family: arial, sans-serif;
		text-align: center;
		line-height: 1;
		text-shadow: 0 0 10px #CC1482;
	}
	
	span {
		width: 100%;
		display: block;
		font-size: 80px;
		color: #FFDB00;
	}
`

const overlay = () => (
	<Overlay>
		<p><span>New</span> Website Coming Soon</p>
	</Overlay>
)

export default overlay