export function jsUcfirst(string){
    let value = string.charAt(0).toUpperCase() + string.slice(1)
    return value.replace("_", " ")
}

export function setData(values){
    return {
        propiedad: {
            ...values,
            "superficie_total": parseInt(values.superficie_total),
            "superficie_util": parseInt(values.superficie_util),
            "dormitorios": parseInt(values.dormitorios),
            "banos": parseInt(values.banos),
            "latitud": parseFloat(values.latitud),
            "longitud": parseFloat(values.longitud),
        }
    }
}