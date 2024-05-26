import { toast } from 'react-toastify';

export const successToast = (msg) => {
    return (
        toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT,
        })
    );
}
 
export const errorToast = (msg) => {
    return (
        toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT, 
        })
    )
}