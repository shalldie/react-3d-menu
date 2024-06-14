// import  from '@tweenjs/tween.js';

import { Easing, Group, Tween } from '@tweenjs/tween.js';

const DURATION_OPEN = 1000; // 每项滚动花费时间 - open
const DURATION_CLOSE = 200; // 每项滚动花费时间 - close
export const MIN_POS = -180; // 折叠时角度
export const MAX_POS = 0; // 展开时角度

class AnimateOptions {
    posList: number[] = [];

    onUpdate: (posList: number[]) => void = () => {};
}

export class Animate {
    private playing = false;
    private group = new Group();

    constructor(private options: AnimateOptions) {}

    private animate = (time?: any) => {
        this.group.update(time);
        if (this.playing) {
            requestAnimationFrame(this.animate);
        }
    };

    public expand() {
        if (!this.options.posList.length) {
            return;
        }

        const list = this.options.posList.slice();

        let delay = 0;

        // debugger

        for (let i = 0; i < list.length; i++) {
            const curPos = list[i];
            const index = i;

            if (curPos === MAX_POS) {
                // console.log('continue', i);
                continue;
            }

            new Tween({ pos: curPos }, this.group)
                .delay(delay)
                .to({ pos: MAX_POS }, DURATION_OPEN)
                .easing(Easing.Elastic.Out)
                .onUpdate(({ pos }) => {
                    list[index] = pos;
                    this.options.onUpdate(list.slice());
                })
                .start();

            delay += DURATION_OPEN * 0.1;
        }

        if (!this.group.getAll().length) {
            return;
        }

        this.playing = true;
        this.group
            .getAll()
            .slice(-1)[0]
            .onStop(() => {
                this.playing = false;
            })
            .onComplete(() => {
                this.playing = false;
            });

        this.animate();
    }

    public collapse() {
        if (!this.options.posList.length) {
            return;
        }

        const list = this.options.posList.slice();

        let delay = 0;

        for (let i = list.length - 1; i >= 0; i--) {
            const curPos = list[i];
            const index = i;

            if (curPos === MIN_POS) {
                continue;
            }

            new Tween({ pos: curPos }, this.group)
                .delay(delay)
                .to({ pos: MIN_POS }, DURATION_CLOSE)
                .easing(Easing.Linear.None)
                .onUpdate(({ pos }) => {
                    list[index] = pos;
                    this.options.onUpdate(list.slice());
                })
                .start();

            delay += DURATION_CLOSE;
        }

        if (!this.group.getAll().length) {
            return;
        }

        this.playing = true;
        this.group
            .getAll()
            .slice(-1)[0]
            .onStop(() => {
                this.playing = false;
            })
            .onComplete(() => {
                this.playing = false;
            });

        this.animate();
    }

    public stop() {
        this.group.getAll().forEach(n => n.stop());
        this.group.removeAll();
        this.playing = false;
    }
}
