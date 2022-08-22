import { ItemType } from "./ItemType";

export class AgedBrieItem extends ItemType {
    udpateQuality() {
        this.upgradeQuality();
        return this.item.quality;
    }
}