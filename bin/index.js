/** WORK IN PROGRESS. MUCH TO IMPROVE */
import { Command } from 'commander';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { intro, outro } from '@clack/prompts';
import { underline, blue } from 'kleur/colors';

/**
 * A helper that helps resolve file path relative to this file.
 * Because a binary can be run from anywhere, we need this to reliably
 * load the correct path
 * @param {string} path
 */
function resolvePath(path) {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	return resolve(__dirname, path);
}

/**
 * Load the package.json by reading it raw from the file and parsing with the global JSON api object
 * @returns {import('../package.json')}
 */
function loadPackageJSON() {
	const pkgPath = resolvePath('../package.json');
	const pkgJSON = readFileSync(pkgPath, 'utf-8');
	return JSON.parse(pkgJSON);
}

// declare the CLI program
const pkg = loadPackageJSON();
const program = new Command();
program
	.name('pcg')
	.description('Profile card generator')
	.version(pkg.version)

program
	.name('buddha')
	.action(() => {
		// FIXME: create a bin/templates/budda.txt file and copy the output of `pnpm pcg buddha`
		const txt = readFileSync(resolvePath('./templates/budda.txt'), 'utf-8');
		console.log('             ' + underline('Buddha bless you and your code'));
		console.log(blue(txt));
	});

program
	.command('gen')
	.description('Generate a profile card ')
	.option('-t, --template <type>', 'output template to use for output, one of {"svg", "txt}; defaults to "txt"') // we will just do txt for now
	.requiredOption('-n, --name <type>', 'name to print on card')
	.requiredOption('-e, --email <type>', 'email to print on card')
	.action((options) => {
		// TODO: do whatever necessary here to produce this output:
		// |----------------------------------|
		// |                                  |
		// | Name : User Name                 |
		// | Email: user_email@gmail.com      |
		// |                                  |
		// |----------------------------------|
		// Be creative, add colors with `kleur/colors`, draw a unicorn, whatever you want
	});

program
	.command('wizard')
	.action(async () => {
		intro('Wizard for creating a profile card. Just follow instructions and you will be golden');
		// TODO: essentially do the same thing as in the `gen` command, but with step-by-step prompts
		// instead of let user provide the options via command line
		outro('Enjoy');
	});

program.parse(process.argv);
