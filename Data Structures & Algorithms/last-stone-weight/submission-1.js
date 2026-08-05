class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

        this.maxHeap = new MaxPriorityQueue();
        
        for (const stone of stones) {
            this.maxHeap.enqueue(stone);
        }

        while (this.maxHeap.size() > 1) {
            const x = this.maxHeap.front();
            this.maxHeap.dequeue();
            const y = this.maxHeap.front();
            this.maxHeap.dequeue();
            this.maxHeap.enqueue(x - y);
        }

        return this.maxHeap.front();
    }
}
