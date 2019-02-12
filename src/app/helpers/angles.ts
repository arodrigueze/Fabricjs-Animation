import { endRef, startRef } from '../const/summary.chart.consts';

export class Angles {
    /**
     * getAngles for circle fabricjs
     * @param angle in degree
     */
    public getAngle(degrees: number) {
        const m = (endRef - startRef) / 360;
        return (m * degrees) + startRef;
    }
}

export const angles = new Angles();
