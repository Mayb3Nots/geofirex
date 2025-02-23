import { GeoFireQuery } from './query';
import { GeoPoint } from 'firebase-admin/firestore';
import { firestore } from 'firebase-admin';
export interface FirePoint {
    geopoint: GeoPoint;
    geohash: string;
}
export declare class GeoFireClient {
    app: firestore.Firestore;
    constructor(app: firestore.Firestore);
    /**
     * Creates reference to a Firestore collection that can be used to make geoqueries
     * @param  {firestore.CollectionReference | firestore.Query | string} ref path to collection
     * @returns {GeoFireQuery}
     */
    query<T>(ref: any): GeoFireQuery<T>;
    /**
     * Creates an object with a geohash. Save it to a field in Firestore to make geoqueries.
     * @param  {number} latitude
     * @param  {number} longitude
     * @returns FirePoint
     */
    point(latitude: number, longitude: number): FirePoint;
    /**
     * Haversine distance between points
     * @param  {FirePoint} from
     * @param  {FirePoint} to
     * @returns number
     */
    distance(from: FirePoint, to: FirePoint): number;
    /**
     * Haversine bearing between points
     * @param  {FirePoint} from
     * @param  {FirePoint} to
     * @returns number
     */
    bearing(from: FirePoint, to: FirePoint): number;
}
/**
 * Initialize the library by passing it your Firebase app
 * @param  {FirebaseApp} app
 * @returns GeoFireClient
 */
export declare function init(app: firestore.Firestore): GeoFireClient;
