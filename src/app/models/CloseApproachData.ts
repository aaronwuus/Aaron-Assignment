import { MissDistance } from './MissDistance';
import { RelativeVelocity } from './RelativeVelocity';

export interface CloseApproachData {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: any;
    relative_velocity: RelativeVelocity;
    miss_distance: MissDistance;
    orbiting_body: string;
}