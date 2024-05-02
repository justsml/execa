import {expectError, expectAssignable} from 'tsd';
import {
	execa,
	execaSync,
	type StdinOption,
	type StdinOptionSync,
	type StdoutStderrOption,
	type StdoutStderrOptionSync,
} from '../../../index.js';

const transformWithPreserveNewlines = {
	* transform(line: unknown) {
		yield line;
	},
	preserveNewlines: true,
} as const;

await execa('unicorns', {stdin: transformWithPreserveNewlines});
execaSync('unicorns', {stdin: transformWithPreserveNewlines});
await execa('unicorns', {stdin: [transformWithPreserveNewlines]});
execaSync('unicorns', {stdin: [transformWithPreserveNewlines]});

await execa('unicorns', {stdout: transformWithPreserveNewlines});
execaSync('unicorns', {stdout: transformWithPreserveNewlines});
await execa('unicorns', {stdout: [transformWithPreserveNewlines]});
execaSync('unicorns', {stdout: [transformWithPreserveNewlines]});

await execa('unicorns', {stderr: transformWithPreserveNewlines});
execaSync('unicorns', {stderr: transformWithPreserveNewlines});
await execa('unicorns', {stderr: [transformWithPreserveNewlines]});
execaSync('unicorns', {stderr: [transformWithPreserveNewlines]});

expectError(await execa('unicorns', {stdio: transformWithPreserveNewlines}));
expectError(execaSync('unicorns', {stdio: transformWithPreserveNewlines}));

await execa('unicorns', {stdio: ['pipe', 'pipe', 'pipe', transformWithPreserveNewlines]});
execaSync('unicorns', {stdio: ['pipe', 'pipe', 'pipe', transformWithPreserveNewlines]});
await execa('unicorns', {stdio: ['pipe', 'pipe', 'pipe', [transformWithPreserveNewlines]]});
execaSync('unicorns', {stdio: ['pipe', 'pipe', 'pipe', [transformWithPreserveNewlines]]});

expectAssignable<StdinOption>(transformWithPreserveNewlines);
expectAssignable<StdinOptionSync>(transformWithPreserveNewlines);
expectAssignable<StdinOption>([transformWithPreserveNewlines]);
expectAssignable<StdinOptionSync>([transformWithPreserveNewlines]);

expectAssignable<StdoutStderrOption>(transformWithPreserveNewlines);
expectAssignable<StdoutStderrOptionSync>(transformWithPreserveNewlines);
expectAssignable<StdoutStderrOption>([transformWithPreserveNewlines]);
expectAssignable<StdoutStderrOptionSync>([transformWithPreserveNewlines]);
