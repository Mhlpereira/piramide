import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface({ input, output });

export class CLI {
    static async readLine(question) {
        return await rl.question(question);
    }

    static closeReadline(){
        rl.close();
    } 
}