const STATUS_CODE = {
    400: 'Bad Request',
    404: 'Not Found'
}

function respRest(status: number, content: Object) {
    return {
        status: status,
        message: STATUS_CODE[status as keyof typeof STATUS_CODE],
        content: content
    }
}