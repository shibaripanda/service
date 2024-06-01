export const fix = {
    defaultStatusesOfOrders: [
        {
            status: 'new',
            label: 'Новый',
            protect: true,
            color: 'rgb(1, 75, 235)'
        },
        {
            status: 'process',
            label: 'В ремонте',
            protect: true,
            color: 'rgb(1, 75, 235)'
        },
        {
            status: 'ready',
            label: 'Готов',
            protect: true,
            color: 'rgb(1, 75, 235)'
        },
        {
            status: 'close',
            label: 'Выдан',
            protect: true,
            color: 'rgb(1, 75, 235)'
        }
    ],
    defaultColorsOfApp : {
        main: 'rgb(1, 75, 235)', 
        order: 'rgb(1, 75, 235)', 
        ready: 'rgb(1, 75, 235)', 
        close: 'rgb(1, 75, 235)'
    }
}