const buttonStyles = `
	display: block;
	font-size: 20px;
	color: #fff;
	text-decoration: none;
	text-transform: uppercase;
	background-color: #333;
	padding: 10px 40px;
	border-radius: 30px;
`;
const blockBlackStyles = `
    width: 300px;
    height: 300px;
    background: tomato;
    border-radius: 20px;
    box-shadow: 0px 3px 5px rgba(0,0,0, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`;

function removeBlock() {
    document
        .querySelector('main')
        .removeChild(document.querySelector('#block-black'));
}

export { buttonStyles, blockBlackStyles, removeBlock };
