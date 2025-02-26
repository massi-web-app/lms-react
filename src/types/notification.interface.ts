export interface NotificationInterface {
    id: string;
    duration?: number;
    message?: string;
    type: NotificationType
}


export type NotificationType = "success" | "error" | "info" | "waring";