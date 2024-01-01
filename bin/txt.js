import { blue } from 'kleur/colors';

/**
 * @param {number} lineLength 
 */
function printEmptyLine(lineLength) {
	console.log('│' + ' '.repeat(lineLength - 2) + '│');
}
/**
 * @param {number} lineLength 
 */
function printTopLine(lineLength) {
	console.log('╭' + '─'.repeat(lineLength - 2) + '╮');
}
/**
 * @param {number} lineLength 
 */
function printBottomLine(lineLength) {
	console.log('╰' + '─'.repeat(lineLength - 2) + '╯');
}

/**
 * @param {number} lineLength
 * @param {string} text
 * @param {number} textLength
 */
function printLine(lineLength, text, textLength) {
	console.log('│ ' + text + ' '.repeat(lineLength - textLength - 4) + ' │');
}

/**
 * @param {string} name
 * @param {string} email
 */
export function printTxtCard(name, email) {
		// name
		let fixedText = ' /\\_/\\  Name : ';
		const nameLength = fixedText.length + name.length;
		const nameText = fixedText + blue(name);

		// email
		fixedText = '( o.o ) Email: ';
		const emailLength = fixedText.length + email.length;
		const emailText = fixedText + blue(email);

		const lineLength = Math.max(nameLength, emailLength) + 4;

		printTopLine(lineLength);
		printLine(lineLength, nameText, nameLength);
		printLine(lineLength, emailText, emailLength);
		fixedText = ' > ^ <';
		printLine(lineLength, fixedText, fixedText.length);
		printBottomLine(lineLength);
}
