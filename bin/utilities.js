import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { readFileSync } from 'fs';

/**
 * A helper that helps resolve file path relative to this file.
 * Because a binary can be run from anywhere, we need this to reliably
 * load the correct path
 * @param {string} path
 */
export function resolvePath(path) {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	return resolve(__dirname, path);
}

/**
 * Load the package.json by reading it raw from the file and parsing with the global JSON api object
 * @returns {import('../package.json')}
 */
export function loadPackageJSON() {
	const pkgPath = resolvePath('../package.json');
	const pkgJSON = readFileSync(pkgPath, 'utf-8');
	return JSON.parse(pkgJSON);
}

/**
 * @param {string} email
 * @returns {boolean}
 */
export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

