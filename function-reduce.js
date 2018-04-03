const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const arr = input.split(' ');
const output = arr.reduce((sentence, word) => {
	return sentence += word.length === 3 ? ' ' : word.charAt(word.length-1).toUpperCase();
}, '');

console.log(output);
