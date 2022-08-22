import { ItemType } from "./ItemType";

export class BackstagePasses extends ItemType {
    udpateQuality(){
        this.upgradeQuality();
        if(this.item.sellIn < 11) {
            this.upgradeQuality();
        }
        if(this.item.sellIn < 6) {
            this.upgradeQuality();
        }
        if(this.item.sellIn < 0) {
            this.item.quality = this.item.quality - this.item.quality;
        }
        return this.item.quality;
    }
}