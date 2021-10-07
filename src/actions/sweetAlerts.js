import swal from 'sweetalert';

export default function sweetAlerts(title,text,icon) {
    return (
        swal({
            title: title,
            text: text,
            icon: icon,
            button: "OK!",
            timer: 1200
        })
    )
}