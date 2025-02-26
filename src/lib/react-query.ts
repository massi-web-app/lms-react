import {MutationCache, QueryCache, QueryClient} from "@tanstack/react-query";
import {Problem} from "@/types/http-errors.interface";
import {NotificationInterface} from "@/types/notification.interface";
import {showNotifications} from '@/stores/notification.store'
export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => {
            //show notification
        }
    }),
    mutationCache: new MutationCache({
        onError: (error: unknown) => {
            showErrorNotifications(error as Problem);
        }
    }),
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            throwOnError: false,
            gcTime: 1000 * 60 * 60 * 24,
        }
    }
});


const showErrorNotifications = (problem: Problem) => {
    const notifications: Omit<NotificationInterface, 'id'>[] = [];
    if (problem?.errors) {
        Object.entries(problem.errors).forEach(([_,values]) =>{
            values.forEach(errorMessage=>{
                notifications.push({
                    message: errorMessage,
                    type: "error"
                })
            })
        })

    } else if (problem?.detail) {
        notifications.push({
            message: problem.detail,
            type: "error"
        })
    }

    showNotifications(notifications);
}