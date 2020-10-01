export class QuickFindUF {
    private id: number[];

    constructor(N: number) {
        this.id = new Array(N);
        for (let i = 0; i < N; i++) {
            this.id[i] = i;
        }
    }

    public connected(p: number, q: number): boolean {
        return this.id[p] === this.id[q];
    }

    public union(p: number, q: number): void {
        const pid = this.id[p];
        const qid = this.id[q];
        for (let i = 0; i < this.id.length; i++) {
            if (this.id[i] === pid) {
                this.id[i] = qid;
            }
        }
    }

}
