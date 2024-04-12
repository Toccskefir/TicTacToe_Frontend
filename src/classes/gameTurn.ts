import Square from "./square";

export default class GameTurn {
    constructor(readonly square: Square, readonly player: string) {
    }
}