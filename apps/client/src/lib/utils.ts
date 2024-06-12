export function getCookie(name: string) {
    const regex = new RegExp('(^| )' + name + '=([^;]+)');
    const match = document.cookie.match(regex);
    return match ? match[2] : undefined;
}

export function formatDate(dateString: string) {
    return new Intl.DateTimeFormat('en', {
        dateStyle: 'short',
        timeStyle: 'short',
    })
        .format(new Date(dateString))
        .replace(',', '');
}
