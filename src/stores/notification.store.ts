import {NotificationInterface,} from "@/types/notification.interface";
import {create} from 'zustand';
import {generateId} from '@/utils/string'
import {devtools} from 'zustand/middleware'
type NotificationState = {
    notifications: NotificationInterface[];
    showNotification: (notification: Omit<NotificationInterface, 'id'>) => void,
    dismissNotification: (id: string) => void
}

export const useNotificationStore = create<NotificationState>()(devtools((set, get) => ({
        notifications: [],
        showNotification: (notification) => {
            const id = generateId();
            set(state => ({
                notifications: [...state.notifications, {id: id, ...notification}]
            }));

            setTimeout(() => {
                get().dismissNotification(id);
            }, 5000);

        },
        dismissNotification: (id) => {
            set(state => ({
                notifications: state.notifications.filter(p => p.id !== id)
            }))
        }
    }))
)
