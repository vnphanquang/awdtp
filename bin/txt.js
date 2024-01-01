import { blue } from 'kleur/colors';

/**
 * @param {number} lineLength 
 */
function genEmptyLine(lineLength) {
	return '│' + ' '.repeat(lineLength - 2) + '│';
}
/**
 * @param {number} lineLength 
 */
function genTopLine(lineLength) {
	return '╭' + '─'.repeat(lineLength - 2) + '╮';
}
/**
 * @param {number} lineLength 
 */
function genBottomLine(lineLength) {
	return '╰' + '─'.repeat(lineLength - 2) + '╯';
}

/**
 * @param {number} lineLength
 * @param {string} text
 * @param {number} textLength
 */
function genLine(lineLength, text, textLength) {
	return '│ ' + text + ' '.repeat(lineLength - textLength - 4) + ' │';
}

/**
 * @param {string} name
 * @param {string} email
 * @param {boolean} plain
 */
export function genTxt(name, email, plain = false) {
	// name
	let fixedText = ' /\\_/\\  Name : ';
	const nameLength = fixedText.length + name.length;
	const nameText = fixedText + (plain ? name : blue(name));

	// email
	fixedText = '( o.o ) Email: ';
	const emailLength = fixedText.length + email.length;
	const emailText = fixedText + (plain ? email : blue(email));

	const lineLength = Math.max(nameLength, emailLength) + 4;

	const lines = [];
	lines.push(
		genTopLine(lineLength),
		genLine(lineLength, nameText, nameLength),
		genLine(lineLength, emailText, emailLength),
	);
	fixedText = ' > ^ <';
	lines.push(
		genLine(lineLength, fixedText, fixedText.length),
	genBottomLine(lineLength),
	);

	return lines.join('\n');
}
