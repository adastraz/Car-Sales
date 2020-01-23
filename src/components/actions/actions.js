export const addFeature = feature => {
    return { type: 'ADD_FEATURE', payload: feature}
}
export const remFeature = feature => {
    return { type: 'REM_FEATURE', payload: feature}
}