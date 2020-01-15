import { CommentStatus } from '../enums';

export class CommentStatusMapper {
    static fromJson(status: string): CommentStatus {
        switch(status) {
            case 'open': return CommentStatus.Open;
            case 'closed': return CommentStatus.Closed;
            default: return CommentStatus.Closed
        }
    }

}