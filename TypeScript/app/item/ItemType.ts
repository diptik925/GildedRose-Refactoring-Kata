import { Item } from "../gilded-rose";

export class ItemType {
    item: Item;

    constructor(item){
        this.item = item;
    }

    get name() {
        return this.item.name;
    }

    get sellIn() {
        return this.item.sellIn;
    }

    get quality() {
        return this.item.quality;
    }

    degradeQuality(minQuality = 0) {
        if (this.item.quality > minQuality) {
            this.item.quality = this.item.quality - 1;
        }
    }

    upgradeQuality(maxQuality = 50) {
        if(this.item.quality < maxQuality){
            this.item.quality = this.item.quality + 1;
        }
    }

    /**
     * Abstract method
     */
    udpateQuality(){
        this.degradeQuality();
        if(this.item.sellIn < 0 ){
            // Degrade quality again if sell by date has passed:
            this.degradeQuality();
        }
        return this.item.quality;
    }

    /**
     * Abstract method
     */
     updateSellIn() {
        this.item.sellIn = this.item.sellIn - 1;
        return this.item.sellIn;
    }
}