/** WORK IN PROGRESS. MUCH TO IMPROVE */
import { Command } from 'commander';

import { readFileSync } from 'fs';
import { intro, outro, text, confirm } from '@clack/prompts';
import { underline, blue, red } from 'kleur/colors';

import { resolvePath, loadPackageJSON, validateEmail } from './utilities.js';
import { printTxtCard } from './txt.js';
import { printSvgCard } from './svg.js';

// declare the CLI program
const pkg = loadPackageJSON();
const program = new Command();
program
	.name('pcg')
	.description('Profile card generator')
	.version(pkg.version)

program
	.command('buddha')
	.action(() => {
		const txt = readFileSync(resolvePath('./templates/buddha.txt'), 'utf-8');
		console.log('             ' + underline('Buddha bless you and your code'));
		console.log(blue(txt));
	});

program
	.command('gen')
	.description('Generate a profile card ')
	.requiredOption('-n, --name <type>', 'name to print on card')
	.requiredOption('-e, --email <type>', 'email to print on card')
	.option('-t, --template <type>', 'output template to use for output, one of {"svg", "txt"}; defaults to "txt"')
	.action((options) => {
		const { name = '', email = '', template = 'txt' } = options;
		switch(template) {
			case 'txt': {
				return printTxtCard(name, email);
			}
			case 'svg': {
				return printSvgCard(name, email);
			}
		}
	});

async function prompt() {
	const name = await text({
		message: 'Enter your name',
		placeholder: 'John Doe',
		validate(value) {
			if (value.length === 0) return red('Value is required!');
		},
	});
	const email = await text({
		message: 'Enter your email',
		placeholder: 'john_doe@example.com',
		validate(value) {
			if (value.length === 0) return red('Value is required!');
			if (!validateEmail(value)) return red('Invalid email!');
		},
	});
	const shouldContinue = await confirm({
		message: `Generating card with name ${blue(name)} and email ${blue(email)}. Confirm?`,
	});
	if (!shouldContinue) return prompt();
	return { name, email };
}

program
	.command('wizard')
	.description('User-friendly wizard for creating a profile card')
	.action(async () => {
		intro('Wizard for creating a profile card. Just follow instructions and you will be golden');
		const { name, email } = await prompt();
		printTxtCard(name, email);
		outro('Enjoy');
	});

program.parse(process.argv);