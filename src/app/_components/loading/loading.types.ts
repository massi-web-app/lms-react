import {ComponentBase} from "@/app/_components/types/component-base.type";


export type LoadingProps = Omit<ComponentBase, 'isDisabled'> & {
    type?: 'spinner' | 'ring'
}

