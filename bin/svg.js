import { readFileSync } from 'fs';
import Mustache from 'mustache';
import { resolvePath } from './utilities.js';

/**
 * @param {string} name
 * @param {string} email
 */
export function genSvg(name, email) {
	const template = readFileSync(resolvePath('./templates/card.svg'), 'utf-8');
	const length = Math.max(name.length, email.length);
	return Mustache.render(template, { name, email, width: (length + 17) * 10 });
}