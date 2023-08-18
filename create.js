#!/usr/bin/env node

const childProcess = require('child_process');
const fs = require('fs');
const nodePath = require('path');
const readline = require('readline');

const VERBOSE = process.argv.slice(2).includes('-v');

async function prompt(message) {
  return await new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function spawn(cmd, ...args) {
  return await new Promise((resolve, reject) => {
    const stdio = VERBOSE ? 'inherit' : 'ignore';

    childProcess.spawn(cmd , args, { stdio }).on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject();
      }
    });
  });
}

async function pathExists(path) {
  return await new Promise((resolve, reject) => {
    fs.stat(path, (error) => {
      if (error?.code === 'ENOENT') {
        resolve(false);
      } else if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });
}

async function main() {
  const projectPath = await prompt('Project path: ');
  const destPath = nodePath.resolve(projectPath);
  const srcPath = nodePath.relative(__dirname, 'blueprint');

  console.log('');

  if (await pathExists(destPath)) throw new Error(`${destPath} already exists`);

  console.log('Copying files...');
  await spawn('cp', '-r', srcPath, destPath);

  process.chdir(destPath);

  console.log('Installing dependencies...');
  await spawn('npm', 'install');

  console.log('Running migrations...');
  await spawn('npm', 'run', 'migration');

  console.log('');
  console.log('🚀', 'Superjet has been setup in', destPath);

  console.log('');
  console.log('Run these commands to get started:');
  console.log('cd', projectPath);
  console.log('npm start');
}

main().catch((error) => {
  console.log('❌', 'Error:', error.message);
  process.exit(1);
});
