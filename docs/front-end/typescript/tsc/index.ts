"use strict";
import * as os from "os";
class Test {
    public outPut: string = "hello world";
    public printText(): void {
        console.log(this.outPut);
        console.log(os.cpus());
    }
}

let t = new Test();
t.printText();