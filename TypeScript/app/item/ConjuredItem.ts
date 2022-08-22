import { ItemType } from "./ItemType";

export class ConjuredItem extends ItemType {
    udpateQuality(){
        this.degradeQuality();
        this.degradeQuality();
        return this.item.quality;
    }
}