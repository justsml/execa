import {expectAssignable} from 'tsd';
import {
	execa,
	execaSync,
	type StdinOption,
	type StdinOptionSync,
	type StdoutStderrOption,
	type StdoutStderrOptionSync,
} from '../../../index.js';

await execa('unicorns', {stdin: undefined});
execaSync('unicorns', {stdin: undefined});
await execa('unicorns', {stdin: [undefined]});
execaSync('unicorns', {stdin: [undefined]});

await execa('unicorns', {stdout: undefined});
execaSync('unicorns', {stdout: undefined});
await execa('unicorns', {stdout: [undefined]});
execaSync('unicorns', {stdout: [undefined]});

await execa('unicorns', {stderr: undefined});
execaSync('unicorns', {stderr: undefined});
await execa('unicorns', {stderr: [undefined]});
execaSync('unicorns', {stderr: [undefined]});

await execa('unicorns', {stdio: undefined});
execaSync('unicorns', {stdio: undefined});

await execa('unicorns', {stdio: ['pipe', 'pipe', 'pipe', undefined]});
execaSync('unicorns', {stdio: ['pipe', 'pipe', 'pipe', undefined]});
await execa('unicorns', {stdio: ['pipe', 'pipe', 'pipe', [undefined]]});
execaSync('unicorns', {stdio: ['pipe', 'pipe', 'pipe', [undefined]]});

expectAssignable<StdinOption>(undefined);
expectAssignable<StdinOptionSync>(undefined);
expectAssignable<StdinOption>([undefined]);
expectAssignable<StdinOptionSync>([undefined]);

expectAssignable<StdoutStderrOption>(undefined);
expectAssignable<StdoutStderrOptionSync>(undefined);
expectAssignable<StdoutStderrOption>([undefined]);
expectAssignable<StdoutStderrOptionSync>([undefined]);
