#!/usr/bin/env node

import cleanCmd from '#commands/clean';
import infoCmd from '#commands/info';
import nftsCmd from '#commands/nfts';
import { Command } from 'commander';
import { readFile } from 'fs/promises';
import { URL } from 'url';

const owners = new Command();

const packageFile = new URL('../package.json', import.meta.url);
const packageJson = JSON.parse(await readFile(packageFile, 'utf-8'));

owners.name('owners').version(packageJson.version);

owners //
	.command('clean')
	.alias('c')
	.action(cleanCmd);

owners //
	.command('info')
	.alias('i')
	.argument('<address>', 'Contract address')
	.action(infoCmd);

owners //
	.command('nfts')
	.argument('<address>', 'Contract address')
	.argument('<block>', 'Block number')
	.action(nftsCmd);

owners.parse(process.argv);
