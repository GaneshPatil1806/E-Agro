
export const formatPrice = (amt: number) => {
    return new Intl.NumberFormat(
            'en-IN', {
            style: 'currency',
            currency: 'IND'
        }
    ).format(amt)
}